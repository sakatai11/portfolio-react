import Kv from "./Kv";
import kvImgPc from "../images/KV_pc.jpeg";
import kvImgSp from "../images/KV_sp.jpeg";
import List from "./List";
import Img01 from "../images/image01.jpg";
import Img02 from "../images/image02.jpeg";
import Img03 from "../images/image03.jpeg";

const kvImages = [kvImgPc,kvImgSp]

const photoList = [ 
  {
    id: 1,
    date: 20230101,
    contentId: "サブ1",
    title: "テキスト1",
    image: Img01,
  },
  {
    id: 2,
    date: 20230102,
    contentId: "サブ2",
    title: "テキスト2",
    image: Img02,
  },
  {
    id: 3,
    date: 20230103,
    contentId: "サブ3",
    title: "テキスト3",
    image: Img03,
  },
  ];

// console.log(photoList);

const Main = () => {
  return (
    <main>
      <Kv src={kvImages}/>
      <div className="mainArticles">
        <div className="listArea">
          <div className="titleArea">
            <h2>PHOTO LIST</h2>
            <a href="#" tabIndex={500}>すべての写真を見る</a>
          </div>
          <ul className="photoContents">
            {
              photoList.map((photo) => (
              <li key={photo.id} >
                <List list={photo}/>
              </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Main;