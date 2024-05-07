import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import ListMain from '../../components/ListMain';


function Outing( {link} ) {
  
  // const pageTransition = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 0 }
  // };

  return (
    <>
      {/* <Header urlCheck={link} /> */}
      {/* <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={{ duration: 1.2 }} // フェードイン・フェードアウトのスピードを調整
      > */}
        <ListMain url={link} />
      {/* </motion.div> */}
    </>
  )
}

export default Outing;
