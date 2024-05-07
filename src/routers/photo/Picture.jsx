import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import PicMain from '../../components/PicMain';

function Picture ( {link} ) {

  const { id } = useParams(); // URLからidパラメータを取得
  console.log(id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        // exit={{opacity: 0}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <PicMain id={id} />
      </motion.div>
    </>
  )
}

export default Picture;