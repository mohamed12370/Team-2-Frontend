import React from 'react';
import './AdminCreateUser.css';
//import AdminSidebar from '../../../../Coponents/Admin/AdminSidebar';
import AdminCreateUser from '../../../../Coponents/Admin/AdminUser/AdminCreateUSer/AdminCreateUser';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';

export default function AdminCreateUserPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="container">
        <Header title={'Create New User'} date={'6th june 2023'} />
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'users'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <AdminCreateUser />
          </div>
        </div>
      </div>
    </div>
  );
}
