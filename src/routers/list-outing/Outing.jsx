import { motion } from 'framer-motion';
import ListMain from '../../components/ListMain';


function Outing( {link} ) {

  return (
    <>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        // exit={{opacity: 0}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <ListMain url={link} />
      </motion.div>
    </>
  )
}

export default Outing;
