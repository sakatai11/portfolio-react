import {
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Top from './routers/top/Top';
import List from './routers/list/List';
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import './layouts/globals.css'
import ListStyles from './layouts/List.module.css'


function App() {
  // opacityの状態を管理するステートフックを定義
  const [opacity, setOpacity] = useState("l-container");

  // コンポーネントがマウントされた後に、opacityを1に変更する副作用フックを定義
  useEffect(() => { // ページの読み込みが完了したら実行されるイベントリスナーを追加
      setOpacity('l-container display');
  }, []);

  return (
    <Routes>
      <Route path='/' element={ <Top property={opacity} />}/>
      <Route path='/list' element={ <List className={ListStyles} />}/>
    </Routes>
  )
}

export default App;
