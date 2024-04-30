import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header'
import PicMain from '../../components/PicMain'
import Footer from '../../components/common/Footer'

function Picture ( {link} ) {

  const { id } = useParams(); // URLからidパラメータを取得
  console.log(id);

  return (
    <div>
      <Header urlCheck={link} />
      <PicMain id={id} />
      <Footer />
    </div>
  )
}

export default Picture;