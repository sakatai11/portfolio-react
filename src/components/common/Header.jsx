import { useRef, useEffect } from "react";
import { Link , NavLink } from 'react-router-dom';
import Nav from "./Nav";
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
      
      if (urlCheck === "/") {
          // .mainArticles の上端がヘッダーの下端よりも下にあるかどうかをチェック
          if (mainArticlesRect.top <= headerRect.bottom) {
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
  }, [urlCheck]);

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
          <Link to="/" tabIndex={100}>TAICHI’s PHOTO</Link>
        </h1>
      </div>
      <div className="Header__nav">
        <Nav />
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
        }} />
      </div>
    </header>
  );
}

export default Header;
