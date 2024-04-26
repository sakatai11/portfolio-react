import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";
import ArrowRight from "./parts/ArrowRight";
import styles from "./layouts/Photo.module.css";


const Photo = ( {url} ) => {
  const [photo, setPhoto] = useState([]); 

  useEffect(() => {
    // ここでgetListData関数を呼び出して、APIデータを取得する
    try {
      getListData('photo', 6, null, [ 'id', 'date', 'tag', 'title', 'image', 'url' ]).then((data) => {
        console.log(data.props.data.contents);
        setPhoto(data.props.data.contents); // 取得したデータのcontents配列をsetPhotoListでローカルステートに保存する
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  console.log(photo);

  //デバイスサイズごとにthresholdの値を変更
  const mediaQuery = window.matchMedia('(min-width: 767px)');
  const threshold = mediaQuery.matches ? 0.3 : 0.2;

    // アニメーション、refとinViewを定義する
    const { ref, inView } = useInView({
      rootMargin: "100px",
      triggerOnce: true,
      threshold: threshold,
    });


  return (
    <div className={styles.listArea}>
      <div className="titleArea">
        <h2>PHOTO</h2>
        <div className="sp-none">
          <ArrowRight url={"/list/"} text={"すべての写真を見る"} />
        </div>
      </div>

      <motion.div
        ref={ref} 
        initial={{ y: 100, opacity: 0 }} 
        animate={inView ? "onscreen" : "offscreen"} // ここに文字列を渡す
        variants={{
          onscreen: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: "anticipate" }
          },
          offscreen: {
            y: 100,
            opacity: 0,
            transition: { duration: 2, ease: "anticipate" }
          }
        }}
      >
        <ul className={`${styles.photoContents} ${"photoContents"}`}>
          {
            photo.slice(0, 6).map((photoList, index) => (
            <li 
              key={photoList.id}
              className={index < 2 ? styles.firstSecondStyle : ''} >
              <PhotoList list={photoList} LinkRouter={Link} url={url} index={index} />
            </li>
            ))
          }
        </ul>
      </motion.div>
      <div className="linkContent pc-none">
          <ArrowRight url={"/list/"} text={"すべての写真を見る"} />
      </div>
    </div>
  );
}

export default Photo;