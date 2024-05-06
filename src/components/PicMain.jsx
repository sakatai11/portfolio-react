import { useState } from 'react';
import Loading from '../Loading';
import PicPhoto from "./PicPhoto";
import styles from './layouts/ListMain.module.css';

const PicMain = ( {id} ) => {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && <Loading />}
      <main className={styles.listMain}>
        <div className="mainArticles">
        <PicPhoto id={id} onLoading={handleLoading} />
        </div>
      </main>
    </>
  );
}

export default PicMain;