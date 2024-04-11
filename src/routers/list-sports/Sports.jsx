
import Header from '../../components/common/Header'
import ListMain from '../../components/ListMain'
import Footer from '../../components/common/Footer'

function Sports( {link} ) {
  let titleName;

  if (link) {
    titleName = "スポーツ";
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

export default Sports;