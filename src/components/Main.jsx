/*----KV-----*/
import Kv from "./Kv";
/*----Photo-----*/
import Photo from "./Photo";
/*----Category-----*/
import Category from "./Category";

const Main = () => {

  return (
    <main>
      <Kv />
      <section>
        <div className="mainArticles">
          <Photo />
          <Category />
        </div>
      </section>
    </main>
  );
}

export default Main;