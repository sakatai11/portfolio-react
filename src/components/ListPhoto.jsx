import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";


const ListPhoto = () => {
  const [photo, setPhoto] = useState([]); 
  const [count, setCount] = useState(0);

  // 新しい写真を既存のリストに追加する前に重複をチェックする
const addNewPhotos = (newPhotos) => {
  setPhoto(prevPhotos => {
    console.log(prevPhotos);
    const existingIds = new Set(prevPhotos.map(li => li.id));
    console.log(existingIds);
    const uniqueNewPhotos = newPhotos.filter(li => !existingIds.has(li.id));
    console.log(prevPhotos);
    console.log(uniqueNewPhotos);
    return [...prevPhotos, ...uniqueNewPhotos];
  });
};

  useEffect(() => {
    // APIから写真データを取得する
    const fetchData = async () => {
      try {
        const data = await getListData('photo', 9, count * 9, null);
        console.log(count);
        console.log(data.props.data.contents); // ここでは全ての写真が取得される
        // 重複をチェックしてから新しい写真をリストに追加する
        addNewPhotos(data.props.data.contents);
      } catch (error) {
        console.error(error); 
      }
    };

    fetchData();
  }, [count]); // countが変更されるたびにuseEffectをトリガーする

  const loadMore = () => {
    setCount(prev => prev + 1); // countを増やして次の9枚をロードする
    console.log(count);
  }

  return (
    <div className="listArea" >
      <div className="titleArea">
        <h2>PHOTO</h2>
      </div>
      <ul className="photoContents">
        {
          photo.map((photoList) => (
          <li key={photoList.id} >
            <PhotoList list={photoList}/>
          </li>
          ))
        }
      </ul>
        <div className="linkContent">
          <button id="btnClick" onClick={loadMore}>
            さらに写真を表示する
          </button>
        </div>
    </div>
  );
}

export default ListPhoto;