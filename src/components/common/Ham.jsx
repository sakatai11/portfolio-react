import Nav from "./Nav";
import PropTypes from "prop-types";

const Ham = ({ handleCloseClick }) => {
	return (
		<nav className="headerHambugerArea">
			<div className="closeBtn" onClick={handleCloseClick}></div>
			<Nav handleCloseClick={handleCloseClick} />
		</nav>
	);
};

// 'handleCloseClick' propはイベントハンドラーであり、必須です。
Ham.propTypes = {
	handleCloseClick: PropTypes.func.isRequired,
};

export default Ham;
