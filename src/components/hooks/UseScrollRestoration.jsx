import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// スクロール位置を記憶するカスタムフック
const UseScrollRestoration = ( {link} ) => {
  const location = useLocation();

  useEffect(() => {
    // ページ遷移時に現在のスクロール位置を保存
    sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY);

    if (location.pathname === link) {
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
    // コンポーネントがアンマウントされたときにスクロール位置を復元
    const savedPosition = sessionStorage.getItem(`scrollPosition_${location.pathname}`);
      if (savedPosition) {
        console.log('アンマウント');
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
      
    };
  }, [location.pathname]);
};

export default UseScrollRestoration;