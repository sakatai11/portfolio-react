import styles from "../layouts/LoadingDisplay.module.css";
import PulseLoader from "react-spinners/PulseLoader";
import PropTypes from "prop-types";

const Loading = ({ completed }) => {
	console.log("読み込み");
	return (
		<div
			className={`${styles.loadingDisplay} ${completed ? styles.completed : ""}`}
		>
			<PulseLoader size={6} margin={10} />
		</div>
	);
};

// Loading コンポーネントのpropsの型を定義します。
Loading.propTypes = {
	// 'completed' propは文字列であり、必須です。
	completed: PropTypes.string.isRequired,
};

export default Loading;
