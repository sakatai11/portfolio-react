/*----KV-----*/
import Kv from "./Kv";
/*----Photo-----*/
import Photo from "./Photo";
/*----Content-----*/
import Contents from "./Contents";

const Main = () => {

  return (
    <main>
      <Kv />
      <div className="mainArticles">
      <Photo />
      <Contents />
      </div>
    </main>
  );
}

export default Main;