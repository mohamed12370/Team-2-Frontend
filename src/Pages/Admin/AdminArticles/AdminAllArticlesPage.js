import React from 'react';
import './ArticlesList.css';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import Side from '../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Header from '../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Btn from '../../../Coponents/Admin/AdminUser/AdminAllUser/BtnCreatUser';
import Title from '../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import TableAllAtricles from '../../../Coponents/Admin/AdminArticles/TableAllAtricles';

export default function AdminAllArticlesPage() {
  return (
    <div>
      <div className="overlay"></div>
      <Container>
        <Header title={'Admin Panel'} date={'6th june 2023'} />
        <Btn title={'creat new article'} path={'/admincreatearticle'} />
        <Row>
          <Col lg={3}>
            <Side activeTitle={'articles'} />
          </Col>
          <Col sm={12} lg={9}>
            <Title
              title={'Articles'}
              placeholder={'Search in Articles'}
              option1={'Puplished'}
              option2={'Draft'}
            />
            <TableAllAtricles />
            <Pagination />
            <button className="btnAppearInMQ">create new article</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
