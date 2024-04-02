import Header from '../../components/common/Header'
import Main from '../../components/Main'
import Footer from '../../components/common/Footer'
import TopStyles from '../../layouts/Top.module.css'

function Top( {property} ) {

  return (
    <div className={`${TopStyles.lContainer} ${property}`}>
      <Header/>
      <Main className={TopStyles} />
      <Footer />
    </div>
  )
}

export default Top;
