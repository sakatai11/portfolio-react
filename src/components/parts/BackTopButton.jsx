import { Link } from "react-router-dom";
import styles from "../layouts/parts/BackTopButton.module.css";

const BackTopButton = () => {
	return (
		<>
			<Link to={"/"} className={styles.button}>
				トップページに戻る
			</Link>
		</>
	);
};

export default BackTopButton;
