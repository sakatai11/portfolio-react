import Animation from "../../components/layouts/Animation";
import useTracking from "../../components/hooks/useTracking";
import BackTopButton from "../../components/parts/BackTopButton";
import { Helmet } from "react-helmet-async";
import styles from "../../components/layouts/parts/NotFound.module.css"
import PropTypes from "prop-types";

function NotFound({ componentName }) {
	//イベントフック
	useTracking();
	return (
		<>
			<Helmet>
				<title>{`${componentName} | TAICHI’s PHOTO`}</title>
				<meta name="description" content={componentName} />
				<meta
					property="og:title"
					content={`${componentName} | TAICHI’s PHOTO `}
				/>
				<meta
					property="og:description"
					content={componentName}
				/>
			</Helmet>
			<Animation>
				<main className={`mainArticles ${styles.contents}`}>
					<div className={styles.mainWrapper}>
						<h2>404
							<span className={styles.spBlock}>&ensp;Not Found</span>
						</h2>
						<p>{componentName}</p>
						<BackTopButton />
					</div>
				</main>
			</Animation>
		</>
	);
}

// List コンポーネントのpropsの型を定義します。
NotFound.propTypes = {
	// 'componentName' propは文字列であり、必須です
	componentName: PropTypes.string.isRequired,
};

export default NotFound;
