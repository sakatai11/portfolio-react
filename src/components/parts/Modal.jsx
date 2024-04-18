import styles from "../layouts/Modal.module.css";


const Modal = ( {handleCloseClick, imageUrl, alt} ) => {
  console.log(handleCloseClick);
  console.log(imageUrl);

  return (
    <div className={styles.modalArea}>

      <div className={styles.container}>
        <div className={styles.modalContents}>
          <div className={styles.clossbtn} onClick={handleCloseClick}>×</div>

          <div className={styles.picture}>
            <img src={imageUrl} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal;