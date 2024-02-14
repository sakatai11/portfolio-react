/*----KV-----*/
import Kv from "./Kv";
import kvImgPc from "../images/KV_pc.jpeg";
import kvImgSp from "../images/KV_sp.jpeg";
/*----List-----*/
import List from "./List";
import Img01 from "../images/image01.jpg";
import Img02 from "../images/image02.jpeg";
import Img03 from "../images/image03.jpeg";
/*----Content-----*/
import Content from "./Content";
import Img04 from "../images/image04.jpeg";
import Img05 from "../images/image05.jpeg";
import Img06 from "../images/image06.jpeg";

const kvImages = [kvImgPc,kvImgSp];

const photoList = [ 
  {
    id: 1,
    date: 20230101,
    contentId: "サブ1",
    title: "テキスト1",
    image: Img01,
    url: "#",

  },
  {
    id: 2,
    date: 20230102,
    contentId: "サブ2",
    title: "テキスト2",
    image: Img02,
    url: "#",
  },
  {
    id: 3,
    date: 20230103,
    contentId: "サブ3",
    title: "テキスト3",
    image: Img03,
    url: "#",
  },
  ];

// console.log(photoList);

const photoContents = [ 
  {
    id: 4,
    title: "タイトル4",
    image: Img04,
    url: "#",
  },
  {
    id: 5,
    title: "タイトル5",
    image: Img05,
    url: "#",
  },
  {
    id: 6,
    title: "タイトル6",
    image: Img06,
    url: "#",
  },
  ];

const Main = () => {
  return (
    <main>
      <Kv src={kvImages}/>
      <div className="mainArticles">
      <div className="listArea">
        <div className="titleArea">
          <h2>PHOTO LIST</h2>
          <a href="#" tabIndex={500} className="arrowLink sp-none">すべての写真を見る</a>
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
      <div className="linkContent">
        <a href="#" tabIndex={500} className="arrowLink pc-none">すべての写真を見る</a>
      </div>
      </div>
      <div className="contentsArea">
          <h2>CONTENTS</h2>
        <ul className="eachContents">
          {
            photoContents.map((content) => (
            <li key={content.id} >
              <Content list={content}/>
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