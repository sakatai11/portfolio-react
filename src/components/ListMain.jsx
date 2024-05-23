/*----Photo-----*/
import ListPhoto from "./ListPhoto";
/*----ategory-----*/
import ListCategory from "./ListCategory";
import styles from './layouts/ListMain.module.css';

import urlFilter from "./hocks/urlFilter";

const ListMain = ( {url} ) => {

  return (
    <main className={styles.listMain}>
      <div className="mainArticles">
      <ListPhoto pageUrl={url} filter={urlFilter()} />
      <ListCategory pageUrl={url} />
      </div>
    </main>
  );
}

export default ListMain;