/*----Photo-----*/
import ListPhoto from "./ListPhoto";
/*----ategory-----*/
import ListCategory from "./ListCategory";
import useUrlFilter from "./hooks/useUrlFilter";
import styles from "./layouts/ListMain.module.css";
import PropTypes from "prop-types"; // PropTypesをインポートする

const ListMain = ({ url }) => {
	return (
		<main className={styles.listMain}>
			<div className="mainArticles">
				<ListPhoto pageUrl={url} filter={useUrlFilter()} />
				<ListCategory pageUrl={url} />
			</div>
		</main>
	);
};

// ListMain コンポーネントのpropsの型を定義します。
ListMain.propTypes = {
	url: PropTypes.string, // 'url' propは文字列であり、必須ではありません。
};

export default ListMain;
