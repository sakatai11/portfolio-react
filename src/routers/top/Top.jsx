import Animation from "../../components/layouts/Animation";
import Main from "../../components/Main";
import styles from "../../components/layouts/Top.module.css";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Top({ link }) {
	return (
		<>
		  <Helmet>
        <title>トップページ | TACHI’s PHOTO </title>
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
};

export default Top;
