import Card from 'react-bootstrap/Card';

const List = (props) => {
  console.log(props.src);

  return (
    <div className="mainArticles">
      {
        props.src.map((prop) => (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={prop} />
          <Card.Body>
            <Card.Text>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Card.Text>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        ))
      }
    </div>
  );
}

export default List;