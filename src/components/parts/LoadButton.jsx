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

export default LoadButton;
