import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import ContentList from "./ContentList";
import styles from "./layouts/ListContents.module.css";


const ListContents = ( {pageUrl} ) => {
  const [content, setContent] = useState([]); // contentListというローカルステートを定義する

  useEffect(() => {
    // ここでgetData関数を呼び出して、APIデータを取得する
    try {
      getListData('category', null).then((data) => { // content_listというエンドポイントを指定する
        console.log(data.props.data.contents);
        setContent(data.props.data.contents); // 取得したデータのcontents配列をsetContentListでローカルステートに保存する
        console.log(content);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  return (
    <div className={`${styles.contentsArea} ${"contentsArea"}`}>
        <h2>CATEGORY</h2>
      <ul className={styles.eachContents}>
        {
          content.map((contentList) => (
          <li key={contentList.id} >
            <ContentList list={contentList} url={pageUrl}/>
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ListContents;