import Animation from "../../components/layouts/Animation";
import ListMain from "../../components/ListMain";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function List({ link, componentName }) {
	return (
		<>
			<Helmet>
				<title>{componentName} | TAICHI’s PHOTO </title>
				<meta name="description" content={`${componentName}の写真一覧です`} />
				<meta
					property="og:title"
					content={`${componentName} | TAICHI’s PHOTO `}
				/>
				<meta
					property="og:description"
					content={`${componentName}の写真一覧です`}
				/>
			</Helmet>
			<Animation>
				<ListMain url={link} />
			</Animation>
		</>
	);
}

// List コンポーネントのpropsの型を定義します。
List.propTypes = {
	// 'link' propは文字列であり、必須です。
	link: PropTypes.string.isRequired,
	// 'componentName' propは文字列であり、必須です
	componentName: PropTypes.string.isRequired,
};

export default List;
