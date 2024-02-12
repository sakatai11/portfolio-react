import Card from 'react-bootstrap/Card';

const List = (props) => {
  console.log(props);
  console.log(props.list.image);

  return (
    <a href={props.list.url} tabIndex={600}>
      <Card>
          <div className='imgDate'>
            <Card.Img variant="top" src={props.list.image} />
            <span>{props.list.date}</span>
          </div>
          <Card.Body>
            <Card.Text style={{ fontSize: '0.75em' }}>{props.list.contentId}</Card.Text>
            <Card.Title style={{ fontSize: '1.34em' }}>{props.list.title}</Card.Title>
          </Card.Body>
      </Card>
    </a>
  );
}

export default List;