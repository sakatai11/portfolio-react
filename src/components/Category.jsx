import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import CategoryList from "./CategoryList";
import styles from "./layouts/TopCategory.module.css";


const Contents = () => {
  const [content, setContent] = useState([]); // ローカルステートを定義する

  useEffect(() => {
    // ここでgetData関数を呼び出して、APIデータを取得する
    try {
      getListData('category', null, null, ['id','image','title', 'url']).then((data) => { // content_listというエンドポイントを指定する
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
        <h2>CATEGORY</h2>
      <ul className={`${styles.eachContents} ${'eachContents'}`}>
        {
          content.map((contentList) => (
          <li key={contentList.id} >
            <CategoryList list={contentList} />
          </li>
          ))
        }
      </ul>
    </motion.div>
  );
}

export default Contents;