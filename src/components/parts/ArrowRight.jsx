import { Link } from 'react-router-dom';

const ArrowRight = ( {url, style, state, text} ) => {

  return (
    <>
      <Link to={url} 
        state={state} 
        className={`${style} ${'arrowLink'}`} 
        // onClick={() => window.top(0, 0)}
        tabIndex={200} >
          {text}
      </Link>
    </>
  )
}

export default ArrowRight ;