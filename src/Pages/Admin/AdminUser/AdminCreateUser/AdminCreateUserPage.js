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
        {/* <h5 className="Header">Create New User</h5>
        <h6 className="Header2">6th june 2023</h6> */}
        <Header title={'Create New User'} date={'6th june 2023'} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Side />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <AdminCreateUser />
          </div>
        </div>
      </div>
    </div>
  );
}
