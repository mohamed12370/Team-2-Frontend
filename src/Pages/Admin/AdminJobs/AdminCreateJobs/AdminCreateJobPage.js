import React from 'react';
import './AdminCreateJobPage.css';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Form from '../../../../Coponents/Admin/AdminJobs/AdminCreateJobs/Form';

export default function AdminCreateJobPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="container">
        <Header title={'Create New Job'} date={'6th june 2023'} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Side />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
