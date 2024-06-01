import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowRight from "./parts/ArrowRight";
import { Link } from "react-router-dom";
import Topstyles from "./layouts/TopCategoryList.module.css";
import Liststyles from "./layouts/ListCategoryList.module.css";
import formatImg from "../components/modules/formatImg";
import PropTypes from "prop-types";

const CategoryList = ({ list, url, index }) => {
	const styleCategory = url ? Liststyles : Topstyles;
	const regex = /^\/list\/(.*|$)/; // 正規表現

	// urlがundefinedの場合にのみmotion.divを適用
	const shouldApplyMotion = url == undefined;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.8,
	});

	// コンテナとその中身をレンダリングする関数
	const renderContent = () => {
		return (
			<Container>
				<Row className={styleCategory.rowStyle}>
					<Col className={styleCategory.colStyle}>
						<img src={formatImg(list.image.url)} alt={list.title} />
					</Col>
					<Col className={styleCategory.colStyle}>
						{regex.test(url) ? (
							<Link to={list.url} state={{ title: list.title }}>
								{list.title}
							</Link>
						) : (
							<>
								<p>{list.title}</p>
								<ArrowRight
									url={list.url}
									style={Topstyles.arrowLink}
									state={{ title: list.title }}
									text={"写真を見る"}
								/>
							</>
						)}
					</Col>
				</Row>
			</Container>
		);
	};

	return shouldApplyMotion ? (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			animate={{ opacity: inView ? 1 : 0 }}
			transition={{ duration: 1, delay: index * 0.2 }}
		>
			{renderContent()}
		</motion.div>
	) : (
		<>{renderContent()}</>
	);
};

// CategoryList コンポーネントのpropsの型を定義します。
CategoryList.propTypes = {
	// 'list' propは、以下の形状を持つオブジェクトである必要があります。
	list: PropTypes.shape({
		// 'image' propは、以下の形状を持つオブジェクトである必要があります。
		image: PropTypes.shape({
			// 'url' propは文字列であり、必須です。
			url: PropTypes.string.isRequired,
		}).isRequired,
		// 'title' propは文字列であり、必須です。
		title: PropTypes.string.isRequired,
		// 'url' propは文字列であり、必須ではありません。
		url: PropTypes.string,
	}).isRequired,
	// 'url' propは文字列であり、必須ではありません。
	url: PropTypes.string,
	// 'index' propは数値であり、必須ではありません。
	index: PropTypes.number,
};

export default CategoryList;
