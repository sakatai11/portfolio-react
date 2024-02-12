import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Content = (props) => {
  console.log(props);
  return (
    <Container>
      <Row>
        <Col><img src={props.list.image} alt={props.list.title} /></Col>
        <Col>
          <p>{props.list.title}</p>
          <div className='arrowLinkArea'>
            <a href={props.list.url}>写真を見る</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;