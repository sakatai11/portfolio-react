import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import ListMain from '../../components/ListMain';
import Footer from '../../components/common/Footer';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

function List( {link} ) {

  return (
    <>
      <Header urlCheck={link} />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <ListMain url={link} />
      </motion.div>
      <Footer />
    </>
  )
}

export default List;
