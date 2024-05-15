import Card from 'react-bootstrap/Card';
import formatImg from '../formatImg';

const PhotoList = ({list, LinkRouter, url, index}) => {
  // console.log("click2");
  // console.log(list);

  console.log(url);
  console.log(index);

  // console.log(formatImg(list.image.url));

  return (
    <LinkRouter to={ `/photo/${list.id}`} tabIndex={200} >
      <Card>
          <div className='imgDate'>
            {/* <Card.Img variant="top" src={list.image.url} /> */}
            <picture>
              <source srcSet={`${formatImg(list.image.url)} 1x, ${formatImg(list.image.url)} 2x`} alt={list.title} type="image/webp" />
              <Card.Img variant="top" src={list.image.url} alt={list.title} />
            </picture>
            <span className={url && index < 2 ? 'topFont' : ' '}>{list.date}</span>
          </div>
          <Card.Body>
            <Card.Text style={url && index < 2 ? { fontSize: '1.1em' } : { fontSize: '0.75em' }}>{list.tag}</Card.Text>
            <Card.Title style={url && index < 2 ? { fontSize: '1.7em' } : { fontSize: '1.34em' }}>{list.title}</Card.Title>
          </Card.Body>
      </Card>
    </LinkRouter>
  );
}

export default PhotoList;