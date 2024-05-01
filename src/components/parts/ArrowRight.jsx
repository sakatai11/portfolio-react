import { Link } from 'react-router-dom';

const ArrowRight = ( {url, style, state, text} ) => {

  return (
    <>
      <Link to={url} tabIndex={500} state={state}  className={`${style} ${'arrowLink'}`}>{text}</Link>
    </>
  )
}

export default ArrowRight ;