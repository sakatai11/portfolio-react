import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";
import LoadButton from "./parts/LoadButton";
import styles from "./layouts/ListArea.module.css";
import { Link } from 'react-router-dom';


const ListPhoto = ( {pageUrl, title} ) => {
  const [photo, setPhoto] = useState([]); ////prevPhotosとuniqueNewPhotosの結合データ
  const [count, setCount] = useState(0); // ロードされた写真セットのカウント
  const [isLoading, setIsLoading] = useState(false); // ボタンをクリックした時の文言の表示
  const [hasMore, setHasMore] = useState(true); // さらに写真があるかどうかのフラグ
  const [button, setButton] = useState(false); // 画像が読み込まれたら表示
  

  console.log(hasMore);

  // 新しい写真を既存のリストに追加する前に重複をチェックする
  const addNewPhotos = (newPhotos) => {
    setPhoto(prevPhotos => {
      setButton(true);
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

  // ページURLに基づいてフィルター条件を返すヘルパー関数
const getFilterForPageUrl = (pageUrl) => {
  const filters = {
    '/list/outing/': 'tag[contains]おでかけ',
    '/list/night/': 'tag[contains]夜',
    '/list/sports/': 'tag[contains]スポーツ',
  };
  console.log(filters[pageUrl]);
  return filters[pageUrl] || ''; // マッチするフィルターがなければ空文字を返す
};

  useEffect(() => {
    // APIから写真データを取得する
    const fetchData = async () => {
      try {
        let data; // data変数を関数スコープで定義する
        const filter = getFilterForPageUrl(pageUrl);
        console.log(filter);
        data = await getListData('photo', 100, count * 9, [ 'id', 'date', 'tag', 'title', 'image', 'url' ], filter);

        console.log(count);
        console.log(data.props.data.contents); // ここでは全ての写真が取得される
        
        // 取得した写真データが空の場合、ロードモアを停止
        if (data && data.props.data.contents.length === 0) {
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
      fetchData().then(() => {
        setIsLoading(false); // 読み込み完了時にisLoadingをfalseに設定
      });
    }
  }, [count, hasMore, pageUrl]); // count,hasMore,pageUrlが変更されるたびにuseEffectをトリガーする

  const loadMore = () => {
    console.log(hasMore);
    if (hasMore) {
      setIsLoading(true); // 読み込み開始時にisLoadingをtrueに設定
      setCount(prev => prev + 1); // 次の9枚をロードする
      console.log(count);
    }
  }

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
            <LoadButton 
              id="btnClick"
              onClick={loadMore} 
              style={{ display: button ? 'block' : 'none' }} // buttonの状態に応じて表示/非表示を切り替える
              isLoading={isLoading} // isLoading状態をLoadButtonに渡す
            />
          </div>
        )
      }
    </div>
  );
}

export default ListPhoto;