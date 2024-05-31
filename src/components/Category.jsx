import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import CategoryList from "./CategoryList";
import styles from "./layouts/TopCategory.module.css";

const Category = () => {
	const [content, setContent] = useState([]); // ローカルステートを定義する

	useEffect(() => {
		// ここでgetData関数を呼び出して、APIデータを取得する
		try {
			getListData("category", null, null, ["id", "image", "title", "url"]).then(
				(data) => {
					// content_listというエンドポイントを指定する
					console.log(data.props.data.contents);
					setContent(data.props.data.contents); // 取得したデータのcontents配列をsetContentListでローカルステートに保存する
				}
			);
		} catch (error) {
			console.error(error);
		}
	}, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

	return (
		<div className={`${styles.contentsArea} ${"contentsArea"}`}>
			<h2>CATEGORY</h2>
			<ul className={`${styles.eachContents} ${"eachContents"}`}>
				{content.map((contentList, index) => (
					<li key={contentList.id}>
						<CategoryList list={contentList} index={index} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
