import React from 'react';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import AdminUpdateJob from '../../../../Coponents/Admin/AdminJobs/AdminUpdateJob/AdminUpdateJob';

export default function AdminUpdateJobPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="container">
        <Header title={'Update New Job'} date={'6th june 2023'} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'jobs'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <AdminUpdateJob />
          </div>
        </div>
      </div>
    </div>
  );
}
