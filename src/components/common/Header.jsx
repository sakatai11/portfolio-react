import { useState } from "react"
import Ham from "./Ham";


const Header = () => {
  // スクロールイベントを監視する
    window.addEventListener("scroll", function() {
      // .mainArticles の位置を取得
      const mainArticles = document.querySelector(".mainArticles");
      const mainArticlesRect = mainArticles.getBoundingClientRect();
      
      // ヘッダーの位置を取得
      const header = document.querySelector("header");
      const headerRect = header.getBoundingClientRect();
      
      // .mainArticles の上端がヘッダーの下端よりも高いかどうかをチェック
      if ( headerRect.bottom >= mainArticlesRect.top) {
          // ヘッダーに "white" クラスを追加
          header.classList.add("white");
      } else {
          // ヘッダーから "white" クラスを削除
          header.classList.remove("white");
      }
    });


  const [isMenu, setIsMenu] = useState('')

  return (
    <header>
      <div className="Header_text">
        <h1>
          <a href="/" tabIndex={100}>TAICHI PHOTO</a>
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
