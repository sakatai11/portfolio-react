import Animation from '../../components/layouts/ Animation';
import ListMain from '../../components/ListMain';


function Outing( {link} ) {

  return (
    <>
      <Animation>
        <ListMain url={link} />
      </Animation>
    </>
  )
}

export default Outing;
