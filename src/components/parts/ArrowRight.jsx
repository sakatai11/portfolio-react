import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ArrowRight = ({ url, style, state, text }) => {
	return (
		<>
			<Link
				to={url}
				state={state}
				className={`${style} ${"arrowLink"}`}
				tabIndex={200}
			>
				{text}
			</Link>
		</>
	);
};

// ArrowRight コンポーネントのpropsの型を定義します。
ArrowRight.propTypes = {
	url: PropTypes.string.isRequired, // 'url' propは文字列であり、必須です。
	style: PropTypes.string, // 'style' propは文字列であり、必須ではありません。
	state: PropTypes.object, // 'state' propはオブジェクトであり、必須ではありません。
	text: PropTypes.string.isRequired, // 'text' propは文字列であり、必須です。
};

export default ArrowRight;
