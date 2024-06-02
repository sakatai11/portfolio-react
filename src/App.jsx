import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Top from "./routers/top/Top";
import List from "./routers/list/List";
import Picture from "./routers/photo/Picture";
import UseScrollRestoration from "./components/hooks/UseScrollRestoration";
import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import "./components/layouts/globals.css";

function App() {
	// opacityの状態を管理するステートフックを定義
	// const [opacity, setOpacity] = useState("l-container");

	// コンポーネントがマウントされた後に、opacityを1に変更する副作用フックを定義
	// useEffect(() => { // ページの読み込みが完了したら実行されるイベントリスナーを追加
	//     setOpacity('l-container display');
	// }, []);
	const location = useLocation();
	console.log(location);
	console.log(location.pathname);

	return (
		<>
			<UseScrollRestoration link={location.pathname} />
			<Header urlCheck={location.pathname} />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Top link={location.pathname} />} />
					<Route path="/list" element={<List link={location.pathname} />} />
					<Route
						path="/list/outing/"
						element={<List link={location.pathname} />}
					/>
					<Route
						path="/list/random_note/"
						element={<List link={location.pathname} />}
					/>
					<Route
						path="/list/sports/"
						element={<List link={location.pathname} />}
					/>
					<Route
						path="/photo/:id"
						element={<Picture link={location.pathname} />}
					/>
				</Routes>
				<Footer />
			</AnimatePresence>
		</>
	);
}

export default App;
