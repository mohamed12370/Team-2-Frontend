import React from 'react';
import './AdminCreateArticlePage.css';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import ArticleDetailsForm from '../../../../Coponents/Admin/AdminArticles/AdminCreateArticle/ArticleDetailsForm';

export default function AdminCreateArticlePage() {
  return (
    <div>
      <div className="overlay"></div>
      <div>
        <Header title={'Create New Atricle'} date={'6th june 2023'} />
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <Side activeTitle={'articles'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <ArticleDetailsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
