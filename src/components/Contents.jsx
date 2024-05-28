import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import getListData from "../api/microCMSClient";
import formatImg from "./modules/formatImg";
import styles from "../components/layouts/Contents.module.css";

const Contents = ( {url, tag, id} ) => {
  const [content, setContent] = useState([]); // ローカルステートを定義する
  const [isLoading, setIsLoading] = useState(true);

  console.log(tag);

  useEffect(() => {
      // ここでgetData関数を呼び出して、APIデータを取得する
      try {
        if (tag) {
          const filter = `tag[contains]${tag}`;
          console.log(filter);
          getListData('photo', 100, null, [ 'id', 'tag', 'title', 'image', 'url' ], filter).then((data) => { // content_listというエンドポイントを指定する
            console.log(data.props.data.contents);
            setContent(data.props.data.contents); // 取得したデータのcontents配列をsetContentListでローカルステートに保存する
            console.log(content);
            setIsLoading(false)
          });
        }
      } catch (error) {
        console.error(error); 
      }

  }, [url, tag]); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  return (
    isLoading ? null : (
      <div className={'contentsArea'}>
        <h2>CONTENTS</h2>
          <ul className={styles.flexContents}>
            {
              content.filter(contentList => contentList.id !== id).map((contentList) => (// idが同じな場合は表示しない
              <li key={contentList.id} >
                <Link to={ `/photo/${contentList.id}`} tabIndex={200} >
                  <Card className={styles.card}>
                      <div className='imgDate'>
                        {/* <Card.Img variant="top" src={list.image.url} /> */}
                        <picture>
                          <source srcSet={`${formatImg(contentList.image.url)} 1x, ${formatImg(contentList.image.url)} 2x`} alt={contentList.title} type="image/webp" />
                          <Card.Img variant="top" src={contentList.image.url} alt={contentList.title} />
                        </picture>
                      </div>
                      <Card.Body>
                        <Card.Title style={{ fontSize: '2.77vw' }}>{contentList.title}</Card.Title>
                      </Card.Body>
                  </Card>
                </Link>
              </li>
              ))
            }
          </ul>
        </div>
      )
  );
}

export default Contents;