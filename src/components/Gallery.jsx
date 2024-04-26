import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import styles from "./layouts/gallery.module.css";


const Gallery = () => {
  const [gallery, setGallery] = useState([]); // ローカルステートを定義する

  useEffect(() => {
    // ここでgetData関数を呼び出して、APIデータを取得する
    try {
      getListData('photo',100, 6,[ 'id', 'gallery_image'], null ).then((data) => { 
        console.log(data.props.data.contents);
        setGallery(data.props.data.contents);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  console.log(gallery);

  return (
    <div className={styles.selectArea }>
      <h3>Gallery</h3>

      <ul className={styles.gridArea}>
        {
          gallery.map((galleryList, index) => (
            <li 
              key={index}
              className={styles.imgContent} 
            >
              <div className={styles.imgBox}>
                <a href={`/photo/${galleryList.id}`} >
                  <img src={galleryList.gallery_image.url} alt={`${'gallery'} ${index + 1 }`}  />
                </a>
              </div>
            </li>
            ))
        }
      </ul>
    </div>
  );
}

export default Gallery;

