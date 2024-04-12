import PicPhoto from "./PicPhoto";

const PicMain = ( {id} ) => {

  return (
    <main>
      <div className="mainArticles">
      <PicPhoto id={id} />
      </div>
    </main>
  );
}

export default PicMain;