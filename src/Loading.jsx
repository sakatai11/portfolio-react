import styles from "./components/layouts/LoadingDisplay.module.css";
import PulseLoader from "react-spinners/PulseLoader"


const Loading = ({completed}) => {
  console.log('読み込み');
  return (
    <div className={`${styles.loadingDisplay} ${completed ? styles.completed : ''}`}><PulseLoader size={6} margin={10} /></div>
  );
};

export default Loading;