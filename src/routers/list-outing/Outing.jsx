import Header from '../../components/common/Header'
import ListMain from '../../components/ListMain'
import Footer from '../../components/common/Footer'

function Outing( {link} ) {
  let titleName;

  if (link) {
    titleName = "おでかけ";
  } else {
    titleName = "Not Found";
  }

  return (
    <div>
      <Header urlCheck={link} />
      <ListMain url={link} name={titleName} />
      <Footer />
    </div>
  )
}

export default Outing;
