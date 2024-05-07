import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Top from './routers/top/Top';
import List from './routers/list/List';
import Outing from './routers/list-outing/Outing';
import Night from './routers/list-night/Night';
import Picture from './routers/photo/Picture';
import Sports from './routers/list-sports/Sports';
import ScrollToTop from './ScrollToTop'; // スクロールを制御
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import './components/layouts/globals.css';

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
  const [isPageLoaded, setPageLoaded] = useState(false);

  // // ページ遷移前にスクロール位置を保存
  // const handleExitComplete = () => {
  //   window.scrollTo(0, 0);
  // };

  // 新しいページがレンダリングされた後、ページが読み込まれたことを示す状態を設定
  useEffect(() => {
    setPageLoaded(true);
  }, [location.pathname]);

  return (
    <>
        {/* <ScrollToTop /> */}
        <Header urlCheck={location.pathname} />
          <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname} >
              <Route path='/' element={ <Top link={location.pathname} />} />
              <Route path='/list' element={ <List link={location.pathname} />} />
              <Route path='/list/outing/' element={ <Outing link={location.pathname} />} />
              <Route path='/list/night/' element={ <Night link={location.pathname} />} />
              <Route path='/list/sports/' element={ <Sports link={location.pathname} />} />
              <Route path='/photo/:id' element={ <Picture link={location.pathname} />} />
            </Routes>
            {isPageLoaded && <Footer />}
          </AnimatePresence>
    </>
  )
}

export default App;
