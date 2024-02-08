import Kv from "./Kv";
import kvImg from "../images/KV_pc.jpeg";
import List from "./List";
import Img01 from "../images/image01.jpg";
import Img02 from "../images/image02.jpeg";
import Img03 from "../images/image03.jpeg";

const photoList = [Img01,Img02,Img03];

console.log(photoList.src);

const Main = () => {
  return (
    <main>
      <Kv src={kvImg}/>
      <ul>
      {
        photoList.map((photo) => (
        <li key={photo} >
        <List src={photo}/>
        </li>
        ))
      }
      </ul>
    </main>
  );
}

export default Main;