import { client } from '../../libs/client'

const getListData = async (endpoint, params) => {
  // endpointとparamsを引数として受け取る
  const data = await client.get({
    endpoint: endpoint, // 引数のendpointを使う
    queries: {}, // 引数のparamsを使う
  });
    // 開発環境のみconsole.logを実行する
    if (process.env.NODE_ENV === 'development') {
      //dataが取得できているのか確認
      console.log(data.contents);
    }

    // propsオブジェクトを返す
    return {
      props: {
        data,
      },
    };
  };

export default getListData;
