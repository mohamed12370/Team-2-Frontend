import React from 'react';
import './AdminCreateUser.css';
import AdminSidebar from '../../../../Coponents/Admin/AdminSidebar';
import AdminCreateUser from '../../../../Coponents/Admin/AdminUser/AdminCreateUSer/AdminCreateUser';

export default function AdminCreateUserPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="container">
        <h4 className="Header">Create New User</h4>
        <h4 className="Header2">6th june 2023</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <AdminSidebar />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <AdminCreateUser />
          </div>
        </div>
      </div>
    </div>
  );
}
