import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import PicMain from '../../components/PicMain';

function Picture ( {link} ) {

  // const pageTransition = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 0 }
  // };

  const { id } = useParams(); // URLからidパラメータを取得
  console.log(id);

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
        <PicMain id={id} />
      {/* </motion.div> */}
    </>
  )
}

export default Picture;