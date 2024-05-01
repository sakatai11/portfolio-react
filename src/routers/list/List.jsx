import Header from '../../components/common/Header';
import ListMain from '../../components/ListMain';
import Footer from '../../components/common/Footer';

function List( {link} ) {

  return (
    <div>
      <Header urlCheck={link} />
      <ListMain url={link} />
      <Footer />
    </div>
  )
}

export default List;
