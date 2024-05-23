import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";
import ArrowRight from "./parts/ArrowRight";
import styles from "./layouts/Photo.module.css";


const Photo = ( {url} ) => {
  const [photo, setPhoto] = useState([]); 

  useEffect(() => {
    // ここでgetListData関数を呼び出して、APIデータを取得する
    try {
      getListData('photo', 6, null, [ 'id', 'date', 'tag', 'title', 'image', 'url' ]).then((data) => {
        console.log(data.props.data.contents);
        setPhoto(data.props.data.contents); // 取得したデータのcontents配列をsetPhotoListでローカルステートに保存する
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  console.log(photo);

  return (
    <div className={styles.listArea}>
      <div className="titleArea">
        <h2>PHOTOS</h2>
        <div className="sp-none">
          <ArrowRight url={"/list/"} state={{title: 'PHOTOS'}} text={"すべての写真を見る"} />
        </div>
      </div>

        <ul className={`${styles.photoContents} ${"photoContents"}`}>
          {
            photo.slice(0, 6).map((photoList, index) => (
            <li 
              key={photoList.id}
              className={index < 2 ? styles.firstSecondStyle : ''} >
              <PhotoList list={photoList} LinkRouter={Link} url={url} index={index} />
            </li>
            ))
          }
        </ul>
      <div className="linkContent pc-none">
          <ArrowRight url={"/list/"} text={"すべての写真を見る"} />
      </div>
    </div>
  );
}

export default Photo;