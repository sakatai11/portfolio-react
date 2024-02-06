import Kv from "./Kv";
import kvImg from "../images/KV_pc.jpeg";

const Main = () => {
  return (
    <main>
      <Kv src={kvImg}/>
      <div className="mainArticles">
      <p>コンテンツです</p>
      </div>
    </main>
  );
}

export default Main;