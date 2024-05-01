import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LinkState = () => {
  const location = useLocation();
  const [content, setContent] = useState(''); // 状態管理
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    console.log(location);
    const title = location.state?.title; // Optional chainingを使用してtitleデータを受け取る
    console.log(title);

    if (title) {
      setContent(<h2>{title}</h2>); // JSXを状態に設定
      setIsLoading(false); // ローディング状態をfalseに設定
    }

  },[location.state]);


  // ローディング中はローディングメッセージを表示
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // ローディングが完了したらコンテンツを表示
  return content;

}


export default LinkState ;
