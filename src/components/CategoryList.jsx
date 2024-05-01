import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowRight from './parts/ArrowRight';
import { Link } from 'react-router-dom'
import Topstyles from './layouts/TopCategoryList.module.css';
import Liststyles from './layouts/ListCategoryList.module.css';

const CategoryList = ({ list, url, index }) => {
  // console.log(list);
  // console.log(url);
  const styleCategory = url ? Liststyles : Topstyles;
  const regex = /^\/list\/(.*|$)/; // 正規表現

  // urlがundefinedの場合にのみmotion.divを適用
  const shouldApplyMotion = url == undefined;

  const { ref, inView } = useInView({
    // rootMargin: "100px",
    triggerOnce: true,
    threshold: 0.8,
  });

    // コンテナとその中身をレンダリングする関数
    const renderContent = () => (
      <Container>
        <Row className={styleCategory.rowStyle}>
          <Col className={styleCategory.colStyle}>
            <img src={list.image.url} alt={list.title} />
          </Col>
          <Col className={styleCategory.colStyle}>
            {regex.test(url) ? (
              <Link to={list.url} state={{title: list.title}}>{list.title}</Link>
            ) : (
              <>
                <p>{list.title}</p>
                <ArrowRight url={list.url} style={Topstyles.arrowLink} state={{title: list.title}} text={"写真を見る"}  />
              </>
            )}
          </Col>
        </Row>
      </Container>
    );

  return (
  shouldApplyMotion ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      {renderContent()}
    </motion.div>
    ) : (
      <>
        {renderContent()}
      </>
    )
  );
};

export default CategoryList;
