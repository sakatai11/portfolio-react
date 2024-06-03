import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import getListData from "../api/microCMSClient";
import styles from "./layouts/gallery.module.css";
import formatImg from "./modules/formatImg";

const Gallery = () => {
	const [gallery, setGallery] = useState([]); // ローカルステートを定義する

	useEffect(() => {
		// ここでgetData関数を呼び出して、APIデータを取得する
		try {
			getListData("photo", 100, 6, ["id", "gallery_image"], null).then(
				(data) => {
					console.log(data.props.data.contents);
					setGallery(data.props.data.contents);
				}
			);
		} catch (error) {
			console.error(error);
		}
	}, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

	console.log(gallery);

	//デバイスサイズごとにthresholdの値を変更
	const mediaQuery = window.matchMedia("(min-width: 767px)");
	const rooMargin = mediaQuery.matches ? "200px" : "100px"; //PC:SP

	const { ref, inView } = useInView({
		rootMargin: rooMargin,
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className={styles.selectArea}>
			<h2>GALLERY</h2>

			<ul className={styles.gridArea}>
				{gallery.map((galleryList, index) => (
					<li key={index} className={styles.imgContent}>
						<motion.div
							className={styles.imgBox}
							ref={ref}
							initial={{ opacity: 0 }}
							animate={{ opacity: inView ? 1 : 0 }}
							transition={{ duration: 1, delay: index * 0.2 }}
						>
							<Link to={`/photo/${galleryList.id}`} tabIndex={200}>
								{/* <img src={galleryList.gallery_image.url} alt={`gallery${index + 1 }`}  /> */}
								<picture>
									<source
										srcSet={`${formatImg(galleryList.gallery_image.url)} 1x, ${formatImg(galleryList.gallery_image.url)} 2x`}
										alt={`gallery${index + 1}`}
										type="image/webp"
									/>
									<img
										src={galleryList.gallery_image.url}
										alt={`gallery${index + 1}`}
									/>
								</picture>
							</Link>
						</motion.div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Gallery;
