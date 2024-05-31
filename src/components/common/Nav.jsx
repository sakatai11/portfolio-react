import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import getListData from "../../api/microCMSClient";
import PropTypes from 'prop-types';

const Nav = ({ handleCloseClick }) => {
	const [content, setContent] = useState([]); // ローカルステートを定義する

	useEffect(() => {
		// ここでgetData関数を呼び出して、APIデータを取得する
		try {
			getListData("category", null, null, ["id", "title", "url"]).then(
				(data) => {
					console.log(data.props.data.contents);
					setContent(data.props.data.contents); // 取得したデータのcontents配列をsetContentListでローカルステートに保存する
					
				}
			);
		} catch (error) {
			console.error(error);
		}
	}, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

	// マウント時のアニメーション
	const variants = (index) => ({
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: { delay: index * 0.3, type: "spring", stiffness: 100 },
		},
	});

	return (
		<>
			<ul className={handleCloseClick ? "headerNavHumburerInner" : ""}>
				<motion.li initial="hidden" animate="visible" variants={variants(1.5)}>
					<NavLink
						to="/list/"
						tabIndex={100}
						end
						state={{ title: "PHOTOS" }}
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={handleCloseClick ? handleCloseClick : undefined}
					>
						すべての写真
					</NavLink>
				</motion.li>
				{content.map((contentList, index) => (
					<motion.li
						key={contentList.id}
						initial="hidden"
						animate="visible"
						variants={variants(index + 1)}
					>
						<NavLink
							to={contentList.url}
							tabIndex={100}
							state={{ title: contentList.title }}
							className={({ isActive }) => (isActive ? "active" : "")}
							onClick={handleCloseClick ? handleCloseClick : undefined}
						>
							{contentList.title}
						</NavLink>
					</motion.li>
				))}
			</ul>
		</>
	);
};

// 'handleCloseClick' propはイベントハンドラーであり、必須です。
Nav.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
};

export default Nav;
