import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContentList = ({list}) => {
  console.log(list);
  return (
    <Container>
      <Row>
        <Col><img src={list.image.url} alt={list.title} /></Col>
        <Col>
          <p>{list.title}</p>
          <a href={list.url} className="arrowLink">写真を見る</a>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentList;