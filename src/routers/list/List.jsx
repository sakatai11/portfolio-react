import Header from '../../components/common/Header'
import ListMain from '../../components/ListMain'
import Footer from '../../components/common/Footer'

function List( {className} ) {

  const pageUrl = window.location.pathname;

  return (
    <div>
      <Header urlCheck={pageUrl} />
      <ListMain className={className} url={pageUrl} />
      <Footer />
    </div>
  )
}

export default List
