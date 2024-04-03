import Header from '../../components/common/Header'
import Main from '../../components/Main'
import Footer from '../../components/common/Footer'
import styles from '../../layouts/Top.module.css'

function Top( {property} ) {

  return (
    <div className={`${styles['.l-container']} ${property}`}>
      <Header/>
      <Main />
      <Footer />
    </div>
  )
}

export default Top;
