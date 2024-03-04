import Card from 'react-bootstrap/Card';

const PhotoList = ({list}) => {
  // console.log("click2");
  // console.log(list);

  return (
    <a href={list.url} tabIndex={600}>
      <Card>
          <div className='imgDate'>
            <Card.Img variant="top" src={list.image.url} />
            <span>{list.date}</span>
          </div>
          <Card.Body>
            <Card.Text style={{ fontSize: '0.75em' }}>{list.tag}</Card.Text>
            <Card.Title style={{ fontSize: '1.34em' }}>{list.title}</Card.Title>
          </Card.Body>
      </Card>
    </a>
  );
}

export default PhotoList;