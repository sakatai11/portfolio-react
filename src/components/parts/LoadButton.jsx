import PropTypes from "prop-types";

const LoadButton = ({ id, onClick, style, isLoading }) => {
	return (
		<>
			<button
				id={id}
				onClick={onClick}
				style={style} // buttonの状態に応じて表示/非表示を切り替える
			>
				{isLoading ? "読み込み中..." : "さらに写真を表示する"}
			</button>
		</>
	);
};

// LoadButton コンポーネントのpropsの型を定義します。
LoadButton.propTypes = {
	// 'id' propは文字列であり、必須です。
	id: PropTypes.string.isRequired,
	// 'onClick' propは関数であり、必須です。
	onClick: PropTypes.func.isRequired,
	// 'style' propはオブジェクトであり、必須です。
	style: PropTypes.object.isRequired,
	// 'isLoading' propはブール値であり、必須です。
	isLoading: PropTypes.bool.isRequired,
};

export default LoadButton;
