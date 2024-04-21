import styles from "./layouts/PicArea.module.css";
import { useState, useRef } from "react";
import { createPortal } from "react-dom"; 
import Modal from "./parts/Modal";

const ModalPortal = ( {children} ) => {
  // CSS Modulesが生成した実際のクラス名を取得
  const targetClass = styles.content;
  // クラス名を使ってDOM要素を選択
  const target = document.querySelector(`.${targetClass}`);
  // targetがnullでないことを確認
  return target ? createPortal(children, target) : null;
} 

const PicPhotoList = ( {img} ) => {
  console.log(img);
  console.log(img.image_list);
  const photoImg = img.image_list;

  const [ modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState(null);
  const [selectedTablet, setSelectedTablet] = useState(null);

  const modalRef = useRef();
  console.log(modalRef);

  // モーダルの表示とクリックした,画像を表示,dom操作
  const photoGet = (imageUrl,alt,imageClass) => {
    setModalOpen(true);
    setSelectedImageUrl(imageUrl);
    setSelectedAlt(alt);
    setSelectedTablet(imageClass);
    // スクロールを無効にする
    document.body.style.overflow = 'hidden';

    // modalRef.currentにクラスを追加
    modalRef.current.classList.add(styles.modalOpen);
  }

  return (
    <>
      <div className={styles.content} ref={modalRef} />
      <div className={styles.titleArea}>
        <h2>{img.title}</h2>
        <div className={styles.subtitleArea}>
          <p>{img.camara}</p>
          <p>{img.film}</p>
        </div>
      </div>
      <div className={styles.imgArea}>
        <ul>
          {
            photoImg.map((imageItem, index) => {
              // widthが450以下の場合に適用するスタイルオブジェクト
              const imageClass = imageItem.width <= 450 ? styles.wh70 : '';

              return (
                <li 
                  key={index}
                  onClick={() => {
                    photoGet(imageItem.url,index + 1,imageClass) 
                  }}

                  disabled={modalOpen}
                >
                  <div className={styles.photoImg}>
                    <img src={imageItem.url} alt={`Photo ${index + 1 }`} className={imageClass}/>
                  </div>
                </li>
              );
            })
          }
        </ul>
        {
          modalOpen && (
            <ModalPortal>
              <Modal handleCloseClick={() => { 
                setModalOpen(false) 
                // スクロールを再度有効にする
                document.body.style.overflow = 'visible';
                // modalRef.currentからクラスを削除
                modalRef.current.classList.remove(styles.modalOpen);
                }} 
                imageUrl={selectedImageUrl} 
                alt={selectedAlt} 
                totalImages={photoImg.length} // ここでphotoImg配列の長さを渡す
                tablet={selectedTablet}
              />
            </ModalPortal>
          )
        }
      </div>
    </>
  );
}

export default PicPhotoList;