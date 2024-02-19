import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";


const Photo = () => {
  const [photo, setPhoto] = useState([]); 

  useEffect(() => {
    // ここでgetListData関数を呼び出して、APIデータを取得する
    try {
      getListData('photo', null).then((data) => {
        console.log(data.props.data.contents);
        setPhoto(data.props.data.contents); // 取得したデータのcontents配列をsetPhotoListでローカルステートに保存する
        console.log(photo);
      });
    } catch (error) {
      console.error(error); 
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

    // アニメーション、refとinViewを定義する
    const { ref, inView } = useInView({
      rootMargin: "100px",
      triggerOnce: true,
      threshold: 0.6,
    });


  return (
    <motion.div className="listArea" ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 1 }}>
      <div className="titleArea">
        <h2>PHOTO</h2>
        <a href="#" tabIndex={500} className="arrowLink sp-none">すべての写真を見る</a>
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
        <a href="#" tabIndex={500} className="arrowLink pc-none">すべての写真を見る</a>
      </div>
    </motion.div>
  );
}

export default Photo;