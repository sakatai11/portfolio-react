import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// スクロール位置を記憶するカスタムフック
const UseScrollRestoration = ( {link} ) => {
  const location = useLocation();

  useEffect(() => {
    // ページ遷移時に保存したスクロール位置を取得
    if (location.pathname == link) {
      const setPosition = sessionStorage.getItem(`scrollPosition_${location.pathname}`);
      window.scrollTo(0, parseInt(setPosition, 10));

      //クリック遷移の場合
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.style.opacity = "0";
        window.scrollTo({top: 0, behavior: 'instant'});
        // 0.2秒後に不透明度を1に戻す
        setTimeout(() => {
          mainElement.style.opacity = "1";
        }, 200);
      }
    }

    return () => {
    // コンポーネントがアンマウントされたときにスクロール位置を保存
    sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY);
    };
  }, [location.pathname]);
};

export default UseScrollRestoration;