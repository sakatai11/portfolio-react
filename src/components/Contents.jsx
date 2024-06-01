import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import getListData from "../api/microCMSClient";
import formatImg from "./modules/formatImg";
import useWindowSize from "./hooks/useWindowSize"; // レスポンス対応
import styles from "../components/layouts/Contents.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PropTypes from "prop-types";

const Contents = ({ url, onLoading, tag, id }) => {
	const [content, setContent] = useState([]); // ローカルステートを定義する
	const [isLoading, setIsLoading] = useState(true);

	console.log(tag);

	const { width } = useWindowSize();
	const isMobile = width <= 767; // SPサイズのブレークポイントを定義

	useEffect(() => {
		// ここでgetData関数を呼び出して、APIデータを取得する
		try {
			if (tag) {
				const filter = `tag[contains]${tag}`;
				console.log(filter);
				getListData(
					"photo",
					100,
					null,
					["id", "tag", "title", "image", "url"],
					filter
				).then((data) => {
					// content_listというエンドポイントを指定する
					console.log(data.props.data.contents);
					setContent(data.props.data.contents); // 取得したデータのcontents配列をsetContentListでローカルステートに保存する
					setIsLoading(false);
					onLoading();
				});
			}
		} catch (error) {
			console.error(error);
		}
	}, [url, tag, onLoading]); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

	return isLoading ? null : (
		<div className={"contentsArea"}>
			<div className={styles.contentsWrapper}>
				<h2 className={styles.h2Contents}>CONTENTS</h2>
				<div className={styles.sliderContents}>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						// centeredSlides={true}
						speed={800}
						navigation={true}
						className={isMobile ? styles.sliderRight : styles.flexContents}
						breakpoints={{
							// 画面の幅が767ピクセル以下の場合
							767: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							// 画面の幅が768ピクセル以上の場合
							768: {
								slidesPerView: 3,
								spaceBetween: 82,
							},
						}}
					>
						{content
							.filter((contentList) => contentList.id !== id)
							.map(
								(
									contentList // idが同じな場合は表示しない
								) => (
									<SwiperSlide key={contentList.id}>
										<Link
											to={`/photo/${contentList.id}`}
											tabIndex={200}
											className={styles.sliderLeft}
										>
											<Card className={styles.card}>
												<div className="imgDate">
													{/* <Card.Img variant="top" src={list.image.url} /> */}
													<picture>
														<source
															srcSet={`${formatImg(contentList.image.url)} 1x, ${formatImg(contentList.image.url)} 2x`}
															alt={contentList.title}
															type="image/webp"
														/>
														<Card.Img
															variant="top"
															src={contentList.image.url}
															alt={contentList.title}
														/>
													</picture>
												</div>
												<Card.Body className={styles.cardTop}>
													<Card.Title
														style={
															isMobile
																? { fontSize: "1.2em" }
																: { fontSize: "1.8vw" }
														}
														className={styles.h5Contents}
													>
														{contentList.title}
													</Card.Title>
												</Card.Body>
											</Card>
										</Link>
									</SwiperSlide>
								)
							)}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

// Contents コンポーネントのpropsの型を定義します。
Contents.propTypes = {
	// 'url' propは文字列であり、必須ではありません。
	url: PropTypes.string,
	// 'onLoading' propは関数であり、必須です。
	onLoading: PropTypes.func.isRequired,
	// 'tag' propは文字列であり、必須ではありません。
	tag: PropTypes.string,
	// 'id' propは文字列または数値であり、必須です。
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Contents;
