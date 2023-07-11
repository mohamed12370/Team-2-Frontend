import React from 'react';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import AdminUpdateArticle from '../../../../Coponents/Admin/AdminArticles/AdminUpdateArticle/AdminUpdateArticle';

export default function AdminUpdateArticlePage() {
  return (
    <div>
      <div className="overlay"></div>
      <div>
        <Header title={'Update New Atricle'} date={'6th june 2023'} />
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <Side activeTitle={'articles'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <AdminUpdateArticle />
          </div>
        </div>
      </div>
    </div>
  );
}
