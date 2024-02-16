/*----KV-----*/
import Kv from "./Kv";
import kvImgPc from "../images/KV_pc.jpeg";
import kvImgSp from "../images/KV_sp.jpeg";
/*----Photo-----*/
import Photo from "./Photo";
/*----Content-----*/
import Contents from "./Contents";

const kvImages = [kvImgPc,kvImgSp];

const Main = () => {

  return (
    <main>
      <Kv src={kvImages}/>
      <div className="mainArticles">
      <Photo />
      <Contents />
      </div>
    </main>
  );
}

export default Main;