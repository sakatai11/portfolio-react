/*----KV-----*/
import Kv from "./Kv";
import kvImgPc from "../images/KV_pc.jpeg";
import kvImgSp from "../images/KV_sp.jpeg";
/*----List-----*/
import List from "./List";
/*----Content-----*/
import Content from "./Content";
import Img04 from "../images/image04.jpeg";
import Img05 from "../images/image05.jpeg";
import Img06 from "../images/image06.jpeg";

import { useState, useEffect } from "react";
import getPhotoList from "../api/microCMSClient";

const kvImages = [kvImgPc,kvImgSp];

const photoContents = [ 
  {
    id: 4,
    title: "タイトル4",
    image: Img04,
    url: "#",
  },
  {
    id: 5,
    title: "タイトル5",
    image: Img05,
    url: "#",
  },
  {
    id: 6,
    title: "タイトル6",
    image: Img06,
    url: "#",
  },
  ];

const Main = () => {
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
    <main>
      <Kv src={kvImages}/>
      <div className="mainArticles">
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
      <div className="contentsArea">
          <h2>CONTENTS</h2>
        <ul className="eachContents">
          {
            photoContents.map((content) => (
            <li key={content.id} >
              <Content list={content}/>
            </li>
            ))
          }
        </ul>
      </div>
      </div>
    </main>
  );
}

export default Main;