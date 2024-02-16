import { useState, useEffect } from "react";
import getPhotoList from "../api/microCMSClient";
import List from "./List";


const PhotoList = () => {
  const [photoList, setPhotoList] = useState([]); 

  useEffect(() => {
    // ここでgetPhotoList関数を呼び出して、APIデータを取得する
    try {
      getPhotoList().then((data) => {
        console.log(data.props.listData.contents);
        setPhotoList(data.props.listData.contents); // 取得したデータのcontents配列をsetPhotoListでローカルステートに保存する
        console.log(photoList);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される


  return (
      <div className="listArea">
        <div className="titleArea">
          <h2>PHOTO LIST</h2>
          <a href="#" tabIndex={500} className="arrowLink sp-none">すべての写真を見る</a>
        </div>
        <ul className="photoContents">
          {
            photoList.map((photo) => (
            <li key={photo.id} >
              <List list={photo}/>
            </li>
            ))
          }
        </ul>
        <div className="linkContent">
          <a href="#" tabIndex={500} className="arrowLink pc-none">すべての写真を見る</a>
        </div>
      </div>
  );
}

export default PhotoList;