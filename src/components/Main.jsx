/*----KV-----*/
import Kv from "./Kv";
/*----Photo-----*/
import Photo from "./Photo";
/*----Category-----*/
import Category from "./Category";

const Main = ({ url }) => {

  return (
    <main>
      <Kv />
      <section>
        <div className="mainArticles">
          <Photo url={url} />
          <Category />
        </div>
      </section>
    </main>
  );
}

export default Main;