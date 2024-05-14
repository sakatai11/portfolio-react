import { useState } from 'react';
import Loading from '../Loading';
import PicPhoto from "./PicPhoto";
import styles from './layouts/ListMain.module.css';

const PicMain = ( {id} ) => {

  const [isLoading, setIsLoading] = useState(true);
  const [completed, setCompleted] = useState('');

  const handleLoading = () => {
    setIsLoading(false);
    setCompleted('completed');
  }

  return (
    <>
      <main className={styles.listMain}>
        <div className={`mainArticles ${isLoading ? styles.listLoading : ''}`}>
        {isLoading ? <Loading /> : <Loading completed={completed} />}
        <PicPhoto id={id} onLoading={handleLoading} />
        </div>
      </main>
    </>
  );
}

export default PicMain;