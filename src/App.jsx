import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import { client } from '../libs/client'

export const getStaticProps = async () => {
  const listData = await client.get({
    endpoint: 'photo_list',
  });
    //dataが取得できているのか確認
    console.log(listData.contents);

    // propsオブジェクトを返す
    return {
      props: {
        listData,
      },
    };
  };

  getStaticProps();

function App() {
  return (
    <div>
      <Header/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
