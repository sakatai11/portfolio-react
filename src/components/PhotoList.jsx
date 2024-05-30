import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from 'react-bootstrap/Card';
import formatImg from "./modules/formatImg";
import useWindowSize from "./hooks/useWindowSize"; // レスポンス対応

const PhotoList = ({list, LinkRouter, url, index}) => {

  const { width } = useWindowSize();
  const isMobile = width <= 767; // SPサイズのブレークポイントを定義

  console.log(url);
  console.log(index);

  // console.log(formatImg(list.image.url));

    //デバイスサイズごとにthresholdの値を変更
    const mediaQuery = window.matchMedia('(min-width: 767px)');
    const threshold = mediaQuery.matches ? 0.2 : 0.1;
  
    // アニメーション、refとinViewを定義する
    const { ref, inView } = useInView({
      rootMargin: "100px",
      triggerOnce: true,
      threshold: threshold,
    });

  return (
    <motion.div
      ref={ref} 
      initial={url ? { y: 100, opacity: 0 } : {}} // urlがtrueの場合のみ初期状態を設定
      animate={url && inView ? "onscreen" : "offscreen"} // urlがtrueかつinViewがtrueの場合に"onscreen"を適用
      variants={{
        onscreen: {
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "anticipate" }
        },
        offscreen: {
          y: url ? 100 : 0, // urlがtrueの場合のみyの値を設定
          opacity: url ? 0 : 1, // urlがtrueの場合のみopacityの値を設定
          transition: url ? { duration: 2, ease: "anticipate" } : {} // urlがtrueの場合のみtransitionを設定
        }
      }}
    >
      <LinkRouter to={ `/photo/${list.id}`} tabIndex={200} >
        <Card>
            <div className='imgDate'>
              {/* <Card.Img variant="top" src={list.image.url} /> */}
              <picture>
                <source srcSet={`${formatImg(list.image.url)} 1x, ${formatImg(list.image.url)} 2x`} alt={list.title} type="image/webp" />
                <Card.Img variant="top" src={list.image.url} alt={list.title} />
              </picture>
              <span className={url && index < 2 ? 'topFont' : 'listFont'}>{list.date}</span>
            </div>
            <Card.Body>
              <Card.Text style={isMobile ? { fontSize: '1em' } : (url && index < 2 ? { fontSize: '1.79vw' } : { fontSize: '1.23vw' })}>{list.tag}</Card.Text>
              <Card.Title style={isMobile ? { fontSize: '1.7em' } : (url && index < 2 ? { fontSize: '2.77vw' } : { fontSize: '2.2vw' })}>{list.title}</Card.Title>
            </Card.Body>
        </Card>
      </LinkRouter>
    </motion.div>
  );
}

export default PhotoList;