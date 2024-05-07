import Animation from '../../components/layouts/ Animation';
import { useParams } from 'react-router-dom';
import PicMain from '../../components/PicMain';

function Picture ( {link} ) {

  const { id } = useParams(); // URLからidパラメータを取得
  console.log(id);

  return (
    <>
      <Animation>
        <PicMain id={id} />
      </Animation>
    </>
  )
}

export default Picture;