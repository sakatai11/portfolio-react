import Animation from '../../components/layouts/Animation';
import ListMain from '../../components/ListMain';

function List( {link} ) {

  return (
    <>
      <Animation>
        <ListMain url={link} />
      </Animation>
    </>
  )
}

export default List;
