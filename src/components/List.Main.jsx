/*----Photo-----*/
import ListPhoto from "./List.Photo";
/*----Content-----*/
import ListContents from "./List.Contents";;

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