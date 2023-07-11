import React from 'react';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import AdminEditUser from '../../../../Coponents/Admin/AdminUser/AdminEditUser/AdminEditUser';

export default function AdminEditUserPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="container">
        <Header title={'Update New User'} date={'6th june 2023'} />
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'users'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <AdminEditUser />
          </div>
        </div>
      </div>
    </div>
  );
}
