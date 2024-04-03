import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../layouts/TopContentsList.module.css';

const ContentList = ({ list, url}) => {
  // console.log(list);
  // console.log(url);

  return (
    <Container>
      <Row className={styles.rowStyle}>
        <Col className={styles.colStyle}>
          <img src={list.image.url} alt={list.title} />
        </Col>
        <Col className={styles.colStyle}>
          {url === '/list/' ? (
            <a href={list.url}>{list.title}</a>
          ) : (
            <>
              <p>{list.title}</p>
              <a href={list.url} className={`${styles.arrowLink} ${'arrowLink'}` }>
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
