import Animation from "../../components/layouts/Animation";
import useTracking from "../../components/hooks/useTracking";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function NotFound({ componentName }) {
	//イベントフック
	useTracking();
	return (
		<>
			<Helmet>
				<title>{`${componentName} | TAICHI’s PHOTO`}</title>
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
				<main class="mainArticles">
					<div>
						test
					</div>
				</main>
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

export default NotFound;
