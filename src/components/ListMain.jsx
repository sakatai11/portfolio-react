/*----Photo-----*/
import ListPhoto from "./ListPhoto";
/*----Content-----*/
import ListContents from "./ListContents";

const ListMain = ( {url} ) => {

  return (
    <main>
      <div className="mainArticles">
      <ListPhoto />
      <ListContents pageUrl={url} />
      </div>
    </main>
  );
}

export default ListMain;