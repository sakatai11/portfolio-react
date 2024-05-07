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

  const { pathname } = useLocation();
  console.log(pathname);
  console.log('Appコンポーネント');

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        <Header urlCheck={pathname} />
          <Routes >
            <Route path='/' element={ <Top link={pathname} />} key={'page-top'} />
            <Route path='/list' element={ <List link={pathname} />} key={'page-list'} />
            <Route path='/list/outing/' element={ <Outing link={pathname} />} key={'page-outing'} />
            <Route path='/list/night/' element={ <Night link={pathname} />} key={'page-night'} />
            <Route path='/list/sports/' element={ <Sports link={pathname} />} key={'page-sport'} />
            <Route path='/photo/:id' element={ <Picture link={pathname} />} key={'route-picture'} />
          </Routes>
        <Footer />
      </AnimatePresence>
    </>
  )
}

export default App;
