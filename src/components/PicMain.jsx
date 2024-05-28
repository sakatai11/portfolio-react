import { useState } from 'react';
import Loading from './modules/Loading'
import PicPhoto from "./PicPhoto";
import Contents from './Contents';
import styles from './layouts/ListMain.module.css';

const PicMain = ( {id, url} ) => {

  const [isLoading, setIsLoading] = useState(true);
  const [completed, setCompleted] = useState('');
  const [tag, setTag] = useState(null);

  // const tagData = useContext(TagContext);
  // console.log(tagData);

  const handleLoading = () => {
    setIsLoading(false);
    setCompleted('completed');
  }

  const tagData = (tagContents) => {
    setTag(tagContents);
  }


  return (
    <>
      <main className={styles.listMain}>
        <div className={`mainArticles ${isLoading ? styles.listLoading : ''}`}>
        {isLoading ? <Loading /> : <Loading completed={completed} />}
        <PicPhoto id={id} onLoading={handleLoading} tagFunction={tagData} />
        <Contents url={url} tag={tag} id={id} />
        </div>
      </main>
    </>
  );
}

export default PicMain;