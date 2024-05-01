import { useLocation } from 'react-router-dom';

const LinkState = () => {
  const location = useLocation();
  console.log(location);
  const title = location.state?.title; // Optional chainingを使用してtitleデータを受け取る

  if (title === 'PHOTO' ) {
    console.log(title);
    return title;
  } else if (!title) {
    // titleが存在しない場合の処理
    console.log('title is undefined!');
    return <div>title is undefined!</div>;
  }

  console.log(title);
  return title;
}


export default LinkState ;
