import PicPhoto from "./PicPhoto";
import styles from './layouts/ListMain.module.css'

const PicMain = ( {id} ) => {

  return (
    <main className={styles.listMain}>
      <div className="mainArticles">
      <PicPhoto id={id} />
      </div>
    </main>
  );
}

export default PicMain;