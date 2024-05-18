import { useEffect } from "react";
import clossIcon from "../../assets/images/close-solid.svg";
import arrowIcon from "../../assets/images/modal-arrowIcon.svg";
import styles from "../layouts/Modal.module.css";
import formatImg from "../../formatImg";


const Modal = ( {handleCloseClick, nextClick, prevClick, imageUrl, alt, totalImages} ) => {
  console.log(handleCloseClick);
  console.log(imageUrl);
  console.log(totalImages);

  const indexNumber = alt;

  useEffect(() => {
    const handleResize = () => {
      const modal = document.querySelector(`.${styles.picture}`);

      if (window.innerWidth < 1475) {
        modal.style.maxWidth = '900px';
      } else if (window.innerWidth >= 1475) {
        modal.style.maxWidth = '1125px';
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
      <div className={styles.container} >
        <div className={styles.clossBtn} onClick={handleCloseClick}>
          <img src={clossIcon} alt="閉じる" />
        </div>

          <div className={styles.picture}>
            <picture className={styles.photoImg}>
              <source srcSet={`${formatImg(imageUrl)} 1x, ${formatImg(imageUrl)} 2x`} alt={`Photo ${alt}`} type="image/webp" />
              <img src={imageUrl} alt={`Photo ${alt}`} />
            </picture>
            <div className={styles.arrowArea}>
            {indexNumber > 1 && renderContentPrev()}
            {indexNumber < totalImages && renderContentNext()}
            </div>
          </div>
            <p>{alt}&ensp;<span>/</span>&ensp;{totalImages}</p>
      </div>
    </div>
  )
}
export default Modal;