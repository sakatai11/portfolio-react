import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Content = (props) => {
  console.log(props);
  return (
    <Container>
      <Row>
        <Col><img src={props.list.image} alt={props.list.title} /></Col>
        <Col>1 of 2</Col>
      </Row>
    </Container>
  );
}

export default Content;