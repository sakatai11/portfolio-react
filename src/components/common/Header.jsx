import { useState } from "react"
import Ham from "./Ham";


const Header = () => {
  // スクロールの位置を取得する関数
  const getScrollPosition = () => {
    return window.scrollY || document.documentElement.scrollTop;
  };

  // スクロールイベントのリスナー
  const handleScroll = () => {
    // スクロールの位置がheaderの高さより大きい場合
    if (getScrollPosition() > 0) {
      // headerにwhiteクラスを付ける
      document.querySelector("header").classList.add("white");
    } else {
      // headerからwhiteクラスを外す
      document.querySelector("header").classList.remove("white");
    }
  };

  // スクロールイベントにリスナーを登録する
  window.addEventListener("scroll", handleScroll);


  const [isMenu, setIsMenu] = useState('')

  return (
    <header>
      <div className="Header_text">
        <h1>
          <a href="#" tabIndex={100}>TAICHI PHOTO</a>
        </h1>
      </div>
      <div className="Header__nav">
        <ul>
          <li><a href="/list/" tabIndex={200}>すべての写真を見る</a></li>
          <li><a href="#" tabIndex={300}>雑記</a></li>
          <li><a href="#" tabIndex={400}>旅行</a></li>
        </ul>
      </div>

      <div id="hamburger" 
        onClick={() => setIsMenu('is-open')}
      >
      </div>

      <div id="container" className={isMenu}>
        <Ham handleCloseClick={() => setIsMenu('')} />
      </div>
    </header>
  );
}

export default Header;
