import { useState, useEffect } from 'react'
import Header from '../../components/common/Header'
import ListMain from '../../components/ListMain'
import Footer from '../../components/common/Footer'
import '../../layouts/App.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート

function App() {
  // opacityの状態を管理するステートフックを定義
  const [opacity, setOpacity] = useState("l-container");

  // コンポーネントがマウントされた後に、opacityを1に変更する副作用フックを定義
  useEffect(() => {
    setOpacity("l-container display");
  }, []);

  const pageUrl = window.location.pathname;

  return (
    <div className={opacity}>
      <Header urlCheck={pageUrl} />
      <ListMain url={pageUrl} />
      <Footer />
    </div>
  )
}

export default App
