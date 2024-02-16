import { client } from '../../libs/client'

const getPhotoList = async () => {
  const listData = await client.get({
    endpoint: 'photo_list',
  });
    // 開発環境のみconsole.logを実行する
    if (process.env.NODE_ENV === 'development') {
      //dataが取得できているのか確認
      console.log(listData.contents);
    }

    // propsオブジェクトを返す
    return {
      props: {
        listData,
      },
    };
  };

export default getPhotoList
