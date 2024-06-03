import Animation from "../../components/layouts/Animation";
import Main from "../../components/Main";
import styles from "../../components/layouts/Top.module.css";
import useTracking from "../../components/hooks/useTracking";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function Top({ link, componentName }) {
	//イベントフック
	useTracking();

	return (
		<>
			<Helmet>
				<title>{`${componentName} | TAICHI’s PHOTO`}</title>
				<meta
					name="description"
					content="TAICHIのポートフォリオサイトです。主にフィルムカメラを使って撮影するのが好きです。幅広いジャンルで撮影しています。"
				/>
				<meta
					property="og:title"
					content={`${componentName} | TAICHI’s PHOTO `}
				/>
				<meta
					property="og:description"
					content="TAICHIのポートフォリオサイトです。主にフィルムカメラを使って撮影するのが好きです。幅広いジャンルで撮影しています。"
				/>
			</Helmet>
			<Animation>
				<Main url={link} styles={styles.main} />
			</Animation>
		</>
	);
}

// Top コンポーネントのpropsの型を定義します。
Top.propTypes = {
	// 'link' propは文字列であり、必須です。
	link: PropTypes.string.isRequired,
	// 'componentName' propは文字列であり、必須です
	componentName: PropTypes.string.isRequired,
};

export default Top;
