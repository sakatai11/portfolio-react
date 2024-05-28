import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import styles from "./layouts/Kv.module.css";
import formatImg from "./modules/formatImg";

const Kv = () => {
  const [kv, setKv] = useState([]); 
  // ローカルステートを追加する
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ここでgetListData関数を呼び出して、APIデータを取得する
    try {
      getListData('key_visual', null, null ).then((data) => {
        console.log(data.props.data.contents[0].keyVisual);
        // setKvをthenメソッドの中に移動する
        setKv(data.props.data.contents[0].keyVisual); // 取得したデータのをsetKvでローカルステートに保存する
        // データの取得が完了したら、isLoadingをfalseにする
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  console.log(kv);

  useEffect(() => {
    const handleScroll = () => {
      const mainArticles = document.querySelector('.mainArticles');
      const kvImage = document.querySelector('.Kv_contents img');

      if (mainArticles && kvImage) {
        const mainArticlesRect = mainArticles.getBoundingClientRect();

        if (0 >= mainArticlesRect.top) {
          // mainArticlesに到達したら、追従を停止
          kvImage.style.position = 'absolute';
        } else {
          // それ以外の場合は、追従を続ける
          kvImage.style.position = '';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.Kv_contents} ${"Kv_contents"}`}>
        <picture>
          {/* isLoadingがfalseになってからレンダリング、kv[0].urlにアクセスする */}
          {isLoading ? null : (
            <>
              <source srcSet={`${formatImg(kv[0].url)} 1x, ${formatImg(kv[0].url)} 2x`} alt="KV" type="image/webp" media="(min-width: 768px)" />
              <source srcSet={`${formatImg(kv[1].url)} 1x, ${formatImg(kv[1].url)} 2x`} alt="KV" type="image/webp" media="(max-width: 767px)"/>
              <source srcSet={`${kv[0].url} 1x, ${kv[0].url} 2x`} alt="KV" type="image/webp" media="(min-width: 768px)"/>
              <source srcSet={`${kv[1].url} 1x, ${kv[1].url} 2x`} alt="KV" type="image/webp" media="(max-width: 767px)"/>
              <img src={kv[0].url} alt="KV" />
            </>
          )}
        </picture>

        <div className={styles.scrollArea}>
          <p>SCROLL</p>
          <div className={styles.scroll_down4}></div>
        </div>
      </div>
    </>
  );
}

export default Kv;
