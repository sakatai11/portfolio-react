import styles from "./layouts/PicArea.module.css";

const PicPhotoList = ( {img} ) => {
  console.log(img);
  console.log(img.image_list);

  return (
    <>
      <h1>{img.camara}<span>{img.film}</span></h1>
      <div className={styles.imgArea}>
        <ul>
          {
            img.image_list.map((imageItem, index) => (
              <li key={index}>
                <img src={imageItem.url} alt={`Photo ${index}`} />
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default PicPhotoList;