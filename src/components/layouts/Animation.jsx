import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Animation = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			{children}
		</motion.div>
	);
};

// Animation コンポーネントのpropsの型を定義します。
Animation.propTypes = {
  // 'children' propはReactノードであり、必須です。
  children: PropTypes.node.isRequired,
};
  
export default Animation;
