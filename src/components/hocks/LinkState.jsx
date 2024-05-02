import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LinkState = ( {name} ) => {
  const location = useLocation();
  const [content, setContent] = useState(''); // 状態管理
  const [isLoading, setIsLoading] = useState(true);

  console.log(name);

  useEffect (() => {
    console.log(location);
    const title = location.state?.title; // Optional chainingを使用してtitleデータを受け取る
    console.log(title);

    // 正規表現パターンを使用して、'tag[contains]'に続く文字列を抽出
    const pattern = /tag\[contains\]/; // 正規表現を修正
    const match = name.match(pattern); // matchメソッドの使用を修正

    const reloadTitle = () => {
        console.log(match);
        // マッチした部分文字列の長さを取得
        const matchLength = match[0].length;
        // マッチした部分文字列の開始インデックスを取得
        console.log(matchLength);
        const startIndex = match.index;
        console.log(startIndex)
        // マッチした部分文字列に続く文字列を取得
        const followingTitle = match.input.substring(startIndex + matchLength);
        console.log(followingTitle); 

        return followingTitle;
      }

    if (title) {
      setContent(<h2>{title}</h2>); // JSXを状態に設定
      setIsLoading(false); // ローディング状態をfalseに設定
    } 
    else if (!title && isLoading) {
      if (name) {
        setContent(<h2>{reloadTitle()}</h2>);
        setIsLoading(false); // ローディング状態をfalseに設定
      } else {
        setContent(<h2>PHOTO</h2>); // JSXを状態に設定
        setIsLoading(false); // ローディング状態をfalseに設定
      }
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
