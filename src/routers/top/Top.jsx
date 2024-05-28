import Animation from '../../components/layouts/Animation';
import Main from '../../components/Main';
import styles from '../../components/layouts/Top.module.css';

function Top( {property,link} ) {

  return (
    <>
      <Animation>
        <Main url={link} styles={styles.main} />
      </Animation>
    </>
    );
}

export default Top;
