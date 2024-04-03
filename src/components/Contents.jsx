import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import ContentList from "./ContentList";
import styles from "../layouts/TopContents.module.css";


const Contents = () => {
  const [content, setContent] = useState([]); // contentListというローカルステートを定義する

  useEffect(() => {
    // ここでgetData関数を呼び出して、APIデータを取得する
    try {
      getListData('contents', null).then((data) => { // content_listというエンドポイントを指定する
        console.log(data.props.data.contents);
        setContent(data.props.data.contents); // 取得したデータのcontents配列をsetContentListでローカルステートに保存する
        console.log(content);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  // アニメーション、refとinViewを定義する
  const { ref, inView } = useInView({
    rootMargin: "100px",
    triggerOnce: true,
    threshold: 0.3,
  });


  return (
    <motion.div 
    className={`${styles.contentsArea} ${'contentsArea'}`}
    ref={ref} 
    initial={{ opacity: 0 }} 
    animate={{ opacity: inView ? 1 : 0 }} 
    transition={{ duration: 1 }}
    >
        <h2>CONTENTS</h2>
      <ul className={`${styles.eachContents} ${'eachContents'}`}>
        {
          content.map((contentList) => (
          <li key={contentList.id} >
            <ContentList list={contentList} />
          </li>
          ))
        }
      </ul>
    </motion.div>
  );
}

export default Contents;