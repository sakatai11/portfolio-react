import Animation from '../../components/layouts/ Animation';
import ListMain from '../../components/ListMain';


function Night( {link} ) {

  return (
    <>
      <Animation>
        <ListMain url={link} />
      </Animation>
    </>
  )
}

export default Night;
