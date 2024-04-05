import { useState } from "react"
import { Link , NavLink } from 'react-router-dom'
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
            <NavLink 
              to="/list/" 
              tabIndex={200}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                すべての写真を見る
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/zaki/" 
              tabIndex={300}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                おでかけ
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/trip/" 
              tabIndex={400}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
              夜
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/trip/" 
              tabIndex={500}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
              スポーツ
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="hamburger" 
        onClick={() => setIsMenu('is-open')}
      >
      </div>

      <div id="container" className={isMenu}>
        <Ham handleCloseClick={() => setIsMenu('')} NavRouter={NavLink} />
      </div>
    </header>
  );
}

export default Header;
