import { Link } from 'react-router-dom';

const ArrowRight = ( {url, style, state, text} ) => {

  return (
    <>
      <Link to={url} state={state}  className={`${style} ${'arrowLink'}`} tabIndex={200} >{text}</Link>
    </>
  )
}

export default ArrowRight ;