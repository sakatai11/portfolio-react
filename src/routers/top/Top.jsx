import Main from '../../components/Main';
import styles from '../../components/layouts/Top.module.css';

function Top( {property,link} ) {

  return (
    <div className={property}>
      <Main url={link} styles={styles.main} />
    </div>
  )
}

export default Top;
