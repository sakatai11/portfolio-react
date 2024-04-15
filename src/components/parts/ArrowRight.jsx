import { Link } from 'react-router-dom';

const ArrowRight = ( {url, style, text} ) => {

  return (
    <>
      <Link to={url} tabIndex={500} className={`${style} ${'arrowLink'}`}>{text}</Link>
    </>
  )
}

export default ArrowRight ;