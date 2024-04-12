import styles from "./layouts/PicArea.module.css";

const PicPhotoList = ( {img} ) => {
  console.log(img);
  console.log(img.image_list);
  const photoImg = img.image_list;

  return (
    <>
      <h1>{img.camara}<span>{img.film}</span></h1>
      <div className={styles.imgArea}>
        <ul>
          {
            photoImg.map((imageItem, index) => {
              // widthが450以下の場合に適用するスタイルオブジェクト
              const imageClass = imageItem.width <= 450 ? styles.wh70 : '';
  
              return (
                <li key={index}>
                  <div className={styles.photoImg}>
                    {/* インラインスタイルとしてcustomStyleを適用 */}
                    <img src={imageItem.url} alt={`Photo ${index}`} className={imageClass}/>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
}

export default PicPhotoList;