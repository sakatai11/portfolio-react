import Card from 'react-bootstrap/Card';

const List = (props) => {
  console.log(props);
  console.log(props.list.image);

  return (
      <Card>
        <div className='imgDate'>
          <Card.Img variant="top" src={props.list.image} />
          <span>{props.list.date}</span>
        </div>
      <Card.Body>
        <Card.Text style={{ fontSize: '1.8rem' }}>{props.list.contentId}</Card.Text>
        <Card.Title style={{ fontSize: '3.2rem' }}>{props.list.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default List;