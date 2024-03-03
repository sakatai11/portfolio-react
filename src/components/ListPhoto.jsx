import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";


const ListPhoto = () => {
  const [photo, setPhoto] = useState([]); 
  const [displayedPhoto, setDisplayedPhoto] = useState([]);

  useEffect(() => {
    // ここでgetListData関数を呼び出して、APIデータを取得する
    try {
      getListData('photo', 100, 0, null).then((data) => {
        console.log(data.props.data.contents);
        setPhoto(data.props.data.contents); // 取得したデータのcontents配列をsetPhotoListでローカルステートに保存する
        setDisplayedPhoto(data.props.data.contents.slice(0, 9));
        console.log(photo);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  const loadMore = () => {
    // 次の9件を取得
    const nextItems = photo.slice(displayedPhoto.length, displayedPhoto.length + 9);
    setDisplayedPhoto((prevItems) => [...prevItems, ...nextItems]);
    console.log("click");
  };

  return (
    <div className="listArea" >
      <div className="titleArea">
        <h2>PHOTO</h2>
      </div>
      <ul className="photoContents">
        {
          photo.slice(0, 9).map((photoList) => (
          <li key={photoList.id} >
            <PhotoList list={photoList}/>
          </li>
          ))
        }
      </ul>
        <div className="linkContent">
          <button id="btnClick" onClick={loadMore}>
            もっと写真を表示する
          </button>
        </div>
    </div>
  );
}

export default ListPhoto;