import { useState, useEffect } from "react";
import getListData from "../api/microCMSClient";
import PicPhotoList from "./PicPhotoList";
import styles from "./layouts/ListArea.module.css";

const PicPhoto = ( {id} ) => {
  const [photo, setPhoto] = useState([]); 
  // ローカルステートを追加する
  const [isLoading, setIsLoading] = useState(true);
  console.log(id);

  useEffect(() => {
    // APIから写真データを取得する
      try {
        getListData('photo',null, null, [ 'title', 'camera', 'film', 'image_list' ], null, id ).then((data) => {
          console.log(data.props.data);
          setPhoto(data.props.data); // 取得したデータをsetPhotoListでローカルステートに保存する
          setIsLoading(false);
        });
        
      } catch (error) {
        console.error(error); 
      }

  }, [id]); 

  console.log(photo);

  return (
    <div className={styles.listArea} >
      {/* isLoadingがfalseになってからレンダリング、urlにアクセスする */}
      {
        isLoading ? null : (
          <PicPhotoList img={photo} />
        )
      }
    </div>
  );
}

export default PicPhoto;