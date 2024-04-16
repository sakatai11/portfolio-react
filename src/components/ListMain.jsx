/*----Photo-----*/
import ListPhoto from "./ListPhoto";
/*----ategory-----*/
import ListCategory from "./ListCategory";
import styles from './layouts/ListMain.module.css';

const ListMain = ( {url, name} ) => {

  return (
    <main className={styles.listMain}>
      <div className="mainArticles">
      <ListPhoto pageUrl={url} title={name} />
      <ListCategory pageUrl={url} />
      </div>
    </main>
  );
}

export default ListMain;