import styles from "./layouts/PicArea.module.css";

const PicPhotoList = ( {img} ) => {
  console.log(img);
  console.log(img.image_list);
  const photoImg = img.image_list;

  return (
    <>
      <div className={styles.titleArea}>
        <h2>{img.title}</h2>
        <div className={styles.subtitleArea}>
          <p>{img.camara}</p>
          <p>{img.film}</p>
        </div>
      </div>
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