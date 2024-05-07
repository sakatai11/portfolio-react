import { motion } from 'framer-motion';
import Main from '../../components/Main';
import styles from '../../components/layouts/Top.module.css';

function Top( {property,link} ) {

  return (
    <>
      <motion.div
        className={property}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        // exit={{opacity: 0}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Main url={link} styles={styles.main} />
      </motion.div>
    </>
    );
}

export default Top;
