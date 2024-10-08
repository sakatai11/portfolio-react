import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Modal from "./parts/Modal";
import styles from "./layouts/PicArea.module.css";
import formatImg from "./modules/formatImg";
import PropTypes from "prop-types";

const ModalPortal = ({ children }) => {
	// CSS Modulesが生成した実際のクラス名を取得
	const targetClass = styles.content;
	// クラス名を使ってDOM要素を選択
	const target = document.querySelector(`.${targetClass}`);
	// targetがnullでないことを確認
	return target ? createPortal(children, target) : null;
};

const PicPhotoList = ({ img }) => {
	console.log(img);
	console.log(img.image_list);
	const photoImg = img.image_list;

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImageUrl, setSelectedImageUrl] = useState(null);
	const [selectedAlt, setSelectedAlt] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(null); // 現在の画像のインデックス

	const modalRef = useRef();
	console.log(modalRef);

	// モーダルの表示とクリックした,画像を表示,dom操作
	const photoGet = (imageUrl, alt) => {
		setModalOpen(true);
		setSelectedImageUrl(imageUrl);
		setSelectedAlt(alt);
		// スクロールを無効にする
		document.body.style.overflow = "hidden";

		// modalRef.currentにクラスを追加
		modalRef.current.classList.add(styles.modalOpen);
	};

	// 次の画像を表示する関数
	const showNextImage = () => {
		const nextIndex = (currentIndex + 1) % photoImg.length; // 次のインデックスを計算
		setCurrentIndex(nextIndex); // インデックスを更新
		const nextImage = photoImg[nextIndex]; // 次の画像を取得
		console.log(nextImage.width);
		setSelectedImageUrl(nextImage.url); // URLを更新
		setSelectedAlt(nextIndex + 1); // altテキストを更新
	};

	// 前の画像を表示する関数
	const showPrevImage = () => {
		const prevIndex = (currentIndex - 1 + photoImg.length) % photoImg.length; // 前のインデックスを計算
		setCurrentIndex(prevIndex); // インデックスを更新
		const prevImage = photoImg[prevIndex]; // 前の画像を取得
		console.log(prevImage.width);
		setSelectedImageUrl(prevImage.url); // URLを更新
		setSelectedAlt(prevIndex + 1); // altテキストを更新
	};

	return (
		<>
			<div className={styles.content} ref={modalRef} />
			<div className={styles.titleArea}>
				<h2>{img.title}</h2>
				<div className={styles.subtitleArea}>
					<p>{img.camera}</p>
					<p>{img.film}</p>
				</div>
			</div>
			<div className={styles.imgArea}>
				<ul>
					{photoImg.map((imageItem, index) => {
						// widthが1370以下の場合に適用するスタイルオブジェクト
						const imageClass = imageItem.width <= 1370 ? styles.wh70 : "";

						return (
							<li
								key={index}
								onClick={() => {
									photoGet(imageItem.url, index + 1, imageClass);
									setCurrentIndex(index);
								}}
								disabled={modalOpen}
							>
								{/* <img src={imageItem.url} alt={`Photo ${index + 1 }`} className={imageClass}/> */}
								<picture className={styles.photoImg}>
									<source
										srcSet={`${formatImg(imageItem.url)} 1x, ${formatImg(imageItem.url)} 2x`}
										alt={`Photo ${index + 1}`}
										type="image/webp"
									/>
									<img
										src={imageItem.url}
										alt={`Photo ${index + 1}`}
										className={imageClass}
									/>
								</picture>
							</li>
						);
					})}
				</ul>
				{modalOpen && (
					<ModalPortal>
						<Modal
							handleCloseClick={() => {
								setModalOpen(false);
								// スクロールを再度有効にする
								document.body.style.overflow = "visible";
								// modalRef.currentからクラスを削除
								modalRef.current.classList.remove(styles.modalOpen);
							}}
							nextClick={showNextImage} // 次への関数を渡す
							prevClick={showPrevImage} // 前への関数を渡す
							imageUrl={selectedImageUrl}
							alt={selectedAlt}
							totalImages={photoImg.length} // ここでphotoImg配列の長さを渡す
						/>
					</ModalPortal>
				)}
			</div>
		</>
	);
};

// ModalPortal コンポーネントの PropTypes
ModalPortal.propTypes = {
	// 'children' propはReactノードであり、必須です。
	children: PropTypes.node.isRequired,
};

// PicPhotoList コンポーネントの PropTypes
PicPhotoList.propTypes = {
	// 'img' propはオブジェクトであり、必須です。
	img: PropTypes.shape({
		// 'title' propは文字列であり、必須です。
		title: PropTypes.string.isRequired,
		// 'camera' propは文字列であり、必須ではありません。
		camera: PropTypes.string,
		// 'film' propは文字列であり、必須ではありません。
		film: PropTypes.string,
		// 'image_list' propはオブジェクトの配列であり、各オブジェクトは特定の形状を持ち、配列自体は必須です。
		image_list: PropTypes.arrayOf(
			PropTypes.shape({
				// 'url' propは文字列であり、必須です。
				url: PropTypes.string.isRequired,
				// 'width' propは数値であり、必須です。
				width: PropTypes.number.isRequired,
			})
			// 'image_list' 配列自体は必須です。
		).isRequired,
		// 'img' オブジェクト自体は必須です。
	}).isRequired,
};

export default PicPhotoList;
