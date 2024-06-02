import Animation from "../../components/layouts/Animation";
import Main from "../../components/Main";
import styles from "../../components/layouts/Top.module.css";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function Top({ link, componentName }) {
	return (
		<>
			<Helmet>
				<title>{componentName} | TACHI’s PHOTO </title>
				<meta
					name="description"
					content="TAICHIのポートフォリオ写真集。フィルムカメラを使って撮影するのが好きです。幅広いジャンルで撮影しています。"
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
