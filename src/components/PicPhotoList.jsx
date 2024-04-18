import styles from "./layouts/PicArea.module.css";
import { useState } from "react";
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



  // モーダルの表示とクリックしたし画像を表示
  const photoGet = (imageUrl,alt) => {
    setModalOpen(true);
    setSelectedImageUrl(imageUrl);
    setSelectedAlt(alt);
  }

  return (
    <>
      <div className={styles.content} />
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
                    photoGet(imageItem.url, `Photo ${index + 1 }`) 
                  }}
                  disabled={modalOpen}
                >
                  <div className={styles.photoImg}>
                    {/* インラインスタイルとしてcustomStyleを適用 */}
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
              <Modal handleCloseClick={() => setModalOpen(false)} imageUrl={selectedImageUrl} alt={selectedAlt} />
            </ModalPortal>
          )
        }
      </div>
    </>
  );
}

export default PicPhotoList;