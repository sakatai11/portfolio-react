import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import styles from "../layouts/Kv.module.css"

const Kv = () => {
  // console.log(props);
  // console.log(props.src);

  const [kv, setKv] = useState([]); 
  // ローカルステートを追加する
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ここでgetListData関数を呼び出して、APIデータを取得する
    try {
      getListData('key_visual', null).then((data) => {
        console.log(data.props.data.contents[0].keyVisual);
        // setKvをthenメソッドの中に移動する
        setKv(data.props.data.contents[0].keyVisual); // 取得したデータのをsetKvでローカルステートに保存する
        console.log(kv);
        // データの取得が完了したら、isLoadingをfalseにする
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  return (
    <>
      <div className={`${styles.Kv_contents} ${"Kv_contents"}`}>
        <picture>
          {/* isLoadingがfalseになってからレンダリング、kv[0].urlにアクセスする */}
          {isLoading ? null : (
            <>
              <source srcSet={`${kv[0].url} 1x, ${kv[1].url} 2x`} alt="KV"  media="(max-width: 767px)"/>
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
