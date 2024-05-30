import { useEffect, useState } from 'react';
import Loading from './modules/Loading'
import PicPhoto from "./PicPhoto";
import Contents from './Contents';
import styles from './layouts/ListMain.module.css';

const PicMain = ( {id, url} ) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isContents, setIsContents] = useState(true);
  const [completed, setCompleted] = useState('');
  const [tag, setTag] = useState(null);

  const tagData = (tagContents) => {
    setTag(tagContents);
  }

  useEffect(() => {
    if (!isLoading && !isContents) {
      setCompleted('completed');
    }
  },[isLoading, isContents]);

  return (
    <>
      <main className={styles.listMain}>
        <div className={`mainArticles ${isLoading && isContents ? styles.listLoading : 'pT0'}`}>
        {isLoading && isContents ? <Loading /> : <Loading completed={completed} />}
        {/* それぞれ関数をイベントハンドラーとして渡す*/ }
        <PicPhoto id={id} onLoading={() => setIsLoading(false)} tagFunction={tagData} /> 
        <Contents url={url} onLoading={() => setIsContents(false)} tag={tag} id={id} />
        </div>
      </main>
    </>
  );
}

export default PicMain;