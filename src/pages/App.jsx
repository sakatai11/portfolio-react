import { useState, useEffect } from 'react'
import Header from '../components/common/Header'
import Main from '../components/Main'
import Footer from '../components/common/Footer'
import '../layouts/App.css'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート

function App() {
  // opacityの状態を管理するステートフックを定義
  const [opacity, setOpacity] = useState("l-container");

  // コンポーネントがマウントされた後に、opacityを1に変更する副作用フックを定義
  useEffect(() => {
    setOpacity("l-container display");
    console.log("実行");
  }, []);

  return (
    <div className={opacity}>
      <Header/>
      <Main />
      <Footer />
    </div>
  )
}

export default App;