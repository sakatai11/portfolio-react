/*----Photo-----*/
import ListPhoto from "./ListPhoto";
/*----Content-----*/
import ListContents from "./ListContents";
import styles from './layouts/ListMain.module.css'

const ListMain = ( {url} ) => {

  return (
    <main className={styles.listMain}>
      <div className="mainArticles">
      <ListPhoto />
      <ListContents pageUrl={url} />
      </div>
    </main>
  );
}

export default ListMain;