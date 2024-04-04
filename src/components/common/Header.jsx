import { useState } from "react"
import { Link } from 'react-router-dom'
import Ham from "./Ham";

const Header = ( {urlCheck} ) => {
  console.log(urlCheck);
  // スクロールイベントを監視する
    window.addEventListener("scroll", function() {
      // .mainArticles の位置を取得
      const mainArticles = document.querySelector(".mainArticles");
      const mainArticlesRect = mainArticles.getBoundingClientRect();

      // ヘッダーの位置を取得
      const header = document.querySelector("header");
      const headerRect = header.getBoundingClientRect();
      
      if (!urlCheck) {
      // .mainArticles の上端がヘッダーの下端よりも高いかどうかをチェック
        if ( headerRect.top >= mainArticlesRect.top) {
          // ヘッダーに "white" クラスを追加
          header.classList.add("white");
          } else {
          // ヘッダーから "white" クラスを削除
          header.classList.remove("white");
        }
      } else {
        // ヘッダーに "white" クラスを追加
        header.classList.add("white");
      }
    });


  const [isMenu, setIsMenu] = useState('')

  return (
    <header>
      <div className="Header_text">
        <h1>
          <Link to="/" tabIndex={100}>TAICHI PHOTO</Link>
        </h1>
      </div>
      <div className="Header__nav">
        <ul>
          <li>
            <Link to="/list/" tabIndex={200}>すべての写真を見る</Link>
          </li>
          <li>
            <Link to="/list/" tabIndex={300}>雑記</Link>
          </li>
          <li>
            <Link to="/list/" tabIndex={400}>旅行</Link>
          </li>
        </ul>
      </div>

      <div id="hamburger" 
        onClick={() => setIsMenu('is-open')}
      >
      </div>

      <div id="container" className={isMenu}>
        <Ham handleCloseClick={() => setIsMenu('')} LinkRouter={Link} />
      </div>
    </header>
  );
}

export default Header;
