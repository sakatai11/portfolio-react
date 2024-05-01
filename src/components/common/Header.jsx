import { useRef, useEffect } from "react";
import { Link , NavLink } from 'react-router-dom';
import Ham from "./Ham";

const Header = ( {urlCheck} ) => {
  console.log(urlCheck);

  useEffect(() => {
    const handleScroll = () => {
      // スクロールイベントの処理
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
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // コンポーネントがアンマウントされるときにイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMenu = useRef()

  // ハンバーガーを動作をコントロールする関数
  const toggleMenu = () => {
    // メニューの状態を切り替える
    isMenu.current.classList.toggle('is-open');
    // スクロールを無効にする
    document.body.style.overflow = isMenu.current.classList.contains('is-open') ? 'hidden' : 'visible';
  };

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
              tabIndex={100}
              end
              state={{title: 'PHOTO'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                すべての写真
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/list/outing/" 
              tabIndex={100}
              state={{title: 'おでかけ'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                おでかけ
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/list/night/" 
              tabIndex={100}
              state={{title: '夜'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
              夜
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/list/sports/" 
              tabIndex={100}
              state={{title: 'スポーツ'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
              スポーツ
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="hamburger" 
        onClick={() => {
          toggleMenu()
        }
        }
      >
      </div>

      <div id="container" ref={isMenu}>
        <Ham handleCloseClick={() => {
          toggleMenu()
        }
        } 
          NavRouter={NavLink}
        />
      </div>
    </header>
  );
}

export default Header;
