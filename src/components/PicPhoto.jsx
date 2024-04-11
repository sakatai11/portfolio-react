import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import PicPhotoList from "./PicPhotoList";
import styles from "./layouts/ListArea.module.css"
import { Link } from 'react-router-dom'


const PicPhotoList = ( {title} ) => {

  useEffect(async() => {
    // APIから写真データを取得する
      try {
        getListData('photo', null, null, [ 'id', 'date', 'tag', 'title', 'image', 'url' ]).then((data) => {
          console.log(data.props.data.contents);
          setPhoto(data.props.data.contents); // 取得したデータのcontents配列をsetPhotoListでローカルステートに保存する
          console.log(photo);
        });
        
      } catch (error) {
        console.error(error); 
      }

  }, []); 

  return (
    <div className={styles.listArea} >
      <div className="titleArea">
        <h2>{title}</h2>
      </div>
      <ul className={`${styles.photoContents} ${"photoContents"}`}>
        {
          photo.map((photoList) => (
          <li key={photoList.id} >
            <PhotoList list={photoList} LinkRouter={Link} />
          </li>
          ))
        }
      </ul>
      {
        hasMore && (
          <div className="linkContent">
            <button 
              id="btnClick" 
              onClick={loadMore}
              style={{ display: button ? 'block' : 'none' }} // buttonの状態に応じて表示/非表示を切り替える
            >
              さらに写真を表示する
            </button>
          </div>
        )
      }
    </div>
  );
}

export default PicPhotoList;