import { useEffect, useState, useCallback } from "react";
import Loading from "./modules/Loading";
import PicPhoto from "./PicPhoto";
import Contents from "./Contents";
import styles from "./layouts/ListMain.module.css";
import PropTypes from "prop-types";

const PicMain = ({ id, url }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isContents, setIsContents] = useState(true);
	const [completed, setCompleted] = useState("");
	const [tag, setTag] = useState(null);

	const tagData = (tagContents) => {
		setTag(tagContents);
	};

	const onLoadingComplete = useCallback(() => {
		setIsLoading(false);
	}, []);

	const onContentsComplete = useCallback(() => {
		setIsContents(false);
	}, []);

	useEffect(() => {
		if (!isLoading && !isContents) {
			setCompleted("completed");
		}
	}, [isLoading, isContents]);

	return (
		<>
			<main className={styles.listMain}>
				<div
					className={`mainArticles ${isLoading && isContents ? styles.listLoading : "pT0"}`}
				>
					{isLoading && isContents ? (
						<Loading completed={completed} />
					) : (
						<Loading completed={completed} />
					)}
					{/* それぞれ関数をイベントハンドラーとして渡す*/}
					<PicPhoto
						id={id}
						onLoading={onLoadingComplete}
						tagFunction={tagData}
					/>
					<Contents
						url={url}
						onLoading={onContentsComplete}
						tag={tag}
						id={id}
					/>
				</div>
			</main>
		</>
	);
};

// PicMain コンポーネントのpropsの型を定義します。
PicMain.propTypes = {
	// 'id' propは文字列であり、必須です。
	id: PropTypes.string.isRequired,
	// 'url' propは文字列であり、必須です。
	url: PropTypes.string.isRequired,
};

export default PicMain;
