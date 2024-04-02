/*----KV-----*/
import Kv from "./Kv";
/*----Photo-----*/
import Photo from "./Photo";
/*----Content-----*/
import Contents from "./Contents";

const Main = ( TopStyles ) => {

  return (
    <main>
      <Kv className={ TopStyles.className } />
      <section>
      <div className="mainArticles">
      <Photo />
      <Contents />
      </div>
      </section>
    </main>
  );
}

export default Main;