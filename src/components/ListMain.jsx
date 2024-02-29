/*----Photo-----*/
import ListPhoto from "./ListPhoto";
/*----Content-----*/
import ListContents from "./ListContents";

const ListMain = () => {

  return (
    <main>
      <div className="mainArticles">
      <ListPhoto />
      <ListContents />
      </div>
    </main>
  );
}

export default ListMain;