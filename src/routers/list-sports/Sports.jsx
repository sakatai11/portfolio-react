import Animation from '../../components/layouts/ Animation';
import ListMain from '../../components/ListMain';


function Sports( {link} ) {

  return (
    <>
      <Animation>
        <ListMain url={link} />
      </Animation>
    </>
  )
}

export default Sports;