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
        getListData('photo',null, null, [ 'camara', 'film', 'image_list' ], null, id ).then((data) => {
          console.log(data.props.data);
          setPhoto(data.props.data); // 取得したデータをsetPhotoListでローカルステートに保存する
          console.log(photo);
          setIsLoading(false);
        });
        
      } catch (error) {
        console.error(error); 
      }

  }, [id]); 

  return (
    <div className={styles.listArea} >
      {/* isLoadingがfalseになってからレンダリング、kv[0].urlにアクセスする */}
      {
        isLoading ? null : (
          <PicPhotoList img={photo} />
        )
      }
    </div>
  );
}

export default PicPhoto;