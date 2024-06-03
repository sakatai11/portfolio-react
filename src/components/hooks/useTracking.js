import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

const useTracking = () => {
	const location = useLocation();
	const [pageTitle, setPageTitle] = useState(document.title);

	useEffect(() => {
		const tagManagerArgs = {
			gtmId: "GTM-PMHX874W",
		};
		TagManager.initialize(tagManagerArgs);
	}, []);

	useEffect(() => {
		// タイトルが変更されたことを検出するための関数
		const handleTitleChange = () => {
			setPageTitle(document.title);
		};

		// タイトルの変更を監視するMutationObserverを設定
		const titleObserver = new MutationObserver(handleTitleChange);
		const titleElement = document.querySelector("title");
		if (titleElement) {
			titleObserver.observe(titleElement, { childList: true });
		}

		// クリーンアップ関数
		return () => {
			titleObserver.disconnect();
		};
	}, []);

	useEffect(() => {
		// タイトルが更新された後にGTMで測定
		console.log(
			`[INFO][useTracking] page=${location.pathname}${location.search}, title=${pageTitle}`
		);
		TagManager.dataLayer({
			dataLayer: {
				event: "pageview",
				page: {
					url: `${location.pathname}${location.search}`,
					title: pageTitle,
				},
			},
		});
	}, [location, pageTitle]);
};

export default useTracking;
