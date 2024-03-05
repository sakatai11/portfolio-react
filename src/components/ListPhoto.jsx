import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";


const ListPhoto = () => {
  const [photo, setPhoto] = useState([]); ////prevPhotosとuniqueNewPhotosの結合データ
  const [count, setCount] = useState(0); // ロードされた写真セットのカウント
  const [hasMore, setHasMore] = useState(true); // さらに写真があるかどうかのフラグ

  console.log(hasMore);

  // 新しい写真を既存のリストに追加する前に重複をチェックする
  const addNewPhotos = (newPhotos) => {
    setPhoto(prevPhotos => {
      console.log(prevPhotos);
      const existingIds = new Set(prevPhotos.map(li => li.id));
      console.log(existingIds);
      const uniqueNewPhotos = newPhotos.filter(li => !existingIds.has(li.id));
      console.log(prevPhotos);
      console.log(uniqueNewPhotos);
      //prevPhotos・・・既存で格納している写真データ
      //uniqueNewPhotos・・・新しく追加する写真データ
      return [...prevPhotos, ...uniqueNewPhotos];
    });
    // 新しい写真が9件未満の場合、さらに写真がないと判断
    setHasMore(newPhotos.length === 9);
  };

  useEffect(() => {
    // APIから写真データを取得する
    const fetchData = async () => {
      try {
        const data = await getListData('photo', 100, count * 9, null);
        console.log(count);
        console.log(data.props.data.contents); // ここでは全ての写真が取得される
        // 取得した写真データが空の場合、ロードモアを停止
        if (data.props.data.contents.length === 0) {
          setHasMore(false);
          return;
        }
        // 重複をチェックしてから新しい写真をリストに追加する
        addNewPhotos(data.props.data.contents.slice(0, 9));
      } catch (error) {
        console.error(error); 
        setHasMore(false); // エラーが発生した場合もロードモアを停止
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [count, hasMore]); // countまたはhasMoreが変更されるたびにuseEffectをトリガーする

  const loadMore = () => {
    console.log(hasMore);
    if (hasMore) {
      setCount(prev => prev + 1); // 次の9枚をロードする
      console.log(count);
    }
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
      {
        hasMore && (
          <div className="linkContent">
            <button id="btnClick" onClick={loadMore}>
              さらに写真を表示する
            </button>
          </div>
        )
      }
    </div>
  );
}

export default ListPhoto;