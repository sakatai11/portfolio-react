import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

const useTracking = () => {
	const location = useLocation();
	const tagManagerArgs = {
		gtmId: "GTM-PMHX874W",
	};

	TagManager.initialize(tagManagerArgs);

	// [INFO] ページ遷移時にGTMで測定
	useEffect(() => {
		// [INFO] react-helmetで設定したtitleタグ情報はレンダリング直後には反映されない
		//        そのためsetTimeoutを使用してhelmetの処理終了を待つ
		window.setTimeout(() => {
			console.log(
				`[INFO][useTracking] page=${location.pathname}${location.search}, title=${document.title}`
			);
			// [INFO] カスタムイベントを設定する場合は以下のdataLayerに値を設定する
			TagManager.dataLayer({
				dataLayer: {
					event: "pageview",
					page: {
						url: `${location.pathname}${location.search}`,
						title: document.title,
					},
				},
			});
		}, 200);
	}, [location]);
};

export default useTracking;
