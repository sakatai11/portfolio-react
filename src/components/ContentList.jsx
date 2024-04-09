import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import Topstyles from './layouts/TopContentsList.module.css';
import Liststyles from './layouts/ListContentsList.module.css';

const ContentList = ({ list, url}) => {
  // console.log(list);
  // console.log(url);

  const styleCategory = url ? Liststyles : Topstyles;
  const regex = /^\/list\/(.*|$)/; // 正規表現


  return (
    <Container>
      <Row className={styleCategory.rowStyle}>
        <Col className={styleCategory.colStyle}>
          <img src={list.image.url} alt={list.title} />
        </Col>
        <Col className={styleCategory.colStyle}>
          {regex.test(url) ? ( // 正規表現、/list/もしくは/の後の任意の文字列が続くURLとマッチする
            <Link to={list.url}>{list.title}</Link>
          ) : (
            <>
              <p>{list.title}</p>
              <Link to={list.url} className={`${Topstyles.arrowLink} ${'arrowLink'}` }>
                写真を見る
              </Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContentList;
