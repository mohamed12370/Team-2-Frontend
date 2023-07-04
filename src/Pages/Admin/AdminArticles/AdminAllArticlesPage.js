import React from 'react';
import './ArticlesList.css';
import Headline from '../../../Coponents/Admin/AdminCoures/Headline';
import SideBar from '../../../Coponents/Admin/AdminCoures/SideBar';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import AllArticles from '../../../Coponents/Admin/AdminCoures/AllArticles';

export default function AdminAllArticlesPage() {
  return (
    <div className="articles-list">
      <div className="overlayy">
        <Container>
          <Headline />
          <Row>
            <Col sm={3}>
              <SideBar />
            </Col>
            <Col sm={9}>
              <div className="section-header">
                <div>
                  {' '}
                  <h2>Articles</h2>
                  <div className="underLine"></div>
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Search in Articles" />
                  <span>{/* <TbSearch /> */}</span>
                </div>
              </div>

              <div className="select-option">
                <select>
                  <option>Puplished</option>
                  <option>Draft</option>
                </select>
              </div>
              <AllArticles />
              <Pagination />
              <button className="btnAppearInMQ">create new article</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
