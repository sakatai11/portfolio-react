import Animation from "../../components/layouts/Animation";
import Main from "../../components/Main";
import styles from "../../components/layouts/Top.module.css";
import PropTypes from 'prop-types';

function Top({ link }) {
	return (
		<>
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
