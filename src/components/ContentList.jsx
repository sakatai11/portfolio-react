import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topstyles from './layouts/TopContentsList.module.css';
import Liststyles from './layouts/ListContentsList.module.css';

const ContentList = ({ list, url}) => {
  // console.log(list);
  // console.log(url);

  const styleCategory = url ? Liststyles : Topstyles;

  return (
    <Container>
      <Row className={styleCategory.rowStyle}>
        <Col className={styleCategory.colStyle}>
          <img src={list.image.url} alt={list.title} />
        </Col>
        <Col className={styleCategory.colStyle}>
          {url === '/list/' ? (
            <a href={list.url}>{list.title}</a>
          ) : (
            <>
              <p>{list.title}</p>
              <a href={list.url} className={`${Topstyles.arrowLink} ${'arrowLink'}` }>
                写真を見る
              </a>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContentList;
