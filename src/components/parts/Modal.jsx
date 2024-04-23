import { useEffect } from "react";
import clossIcon from "../../assets/images/close-solid.svg";
import arrowIcon from "../../assets/images/modal-arrowIcon.svg"
import styles from "../layouts/Modal.module.css";


const Modal = ( {handleCloseClick, nextClick, prevClick, imageUrl, alt, totalImages, tablet} ) => {
  console.log(handleCloseClick);
  console.log(imageUrl);
  console.log(totalImages);
  console.log(tablet);

  const indexNumber = alt;

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

  // 次へのコンテンツをレンダリングする関数
  const renderContentNext = () => (
    <a className={styles.picNext} onClick={nextClick} >
      <img src={arrowIcon} alt="次へ" className={styles.nextIcon}/>
    </a>
  );

  // 前へのコンテンツをレンダリングする関数
  const renderContentPrev = () => (
    <a className={styles.picPrev} onClick={prevClick} >
      <img src={arrowIcon} alt="前へ" className={styles.prevIcon} />
    </a>
  );

  return (
    <div className={styles.modalArea}>
      <div className={tablet ? `${styles.container} ${styles.wh80}` : styles.container} >
        <div className={styles.modalContents}>
          <div className={styles.textContent}>
            <p>{alt}&ensp;<span>/</span>&ensp;{totalImages}</p>
            <div className={styles.clossBtn} onClick={handleCloseClick}>
              <img src={clossIcon} alt="閉じる" />
            </div>
          </div>

          <div className={styles.picture}>
            <img src={imageUrl} alt={`Photo ${alt}`} />
            <div className={styles.arrowArea}>
            {indexNumber > 1 && renderContentPrev()}
            {indexNumber < totalImages && renderContentNext()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal;