import { useEffect } from "react";
import { useState } from "react"; 
import styles from "../layouts/Modal.module.css";


const Modal = ( {handleCloseClick, imageUrl, alt, totalImages, tabletResize} ) => {
  console.log(handleCloseClick);
  console.log(imageUrl);
  console.log(totalImages);
  console.log(window.innerWidth);
  console.log(tabletResize);

  const [ tablet, setTablet ] = useState(false);

  if (window.innerWidth <= 1024  && tabletResize <= 450  ) {
    setTablet(true); 
  }

  useEffect(() => {
    const handleResize = () => {
      const modal = document.querySelector(`.${styles.picture}`);

      if (window.innerWidth <= 1470) {
        modal.style.maxWidth = '900px';
      } 

    };

    // コンポーネントがマウントされたときにイベントリスナーを追加
    window.addEventListener('resize', handleResize);
    // 初期サイズを設定
    handleResize();
    // コンポーネントがアンマウントされたときにイベントリスナーを削除
    return () => window.removeEventListener('resize', handleResize);

  },[]);

  return (
    <div className={styles.modalArea}>
        <div className={tabletResize <= 450 && tablet  ? styles.containerWh80 : styles.container}>
        <div className={styles.modalContents}>
          <div className={styles.textContent}>
            <p>{alt}&ensp;<span>/</span>&ensp;{totalImages}</p>
            <div className={styles.clossBtn} onClick={handleCloseClick}>
              <img src="../src/assets/images/close-solid.svg" alt="閉じる" />
            </div>
          </div>

          <div className={styles.picture}>
            <img src={imageUrl} alt={`Photo ${alt}`} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal;