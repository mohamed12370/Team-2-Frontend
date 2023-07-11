import React from 'react';
import './AdminAllUserPage.css';
import Overlay from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Overlay';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Btn from '../../../../Coponents/Admin/AdminUser/AdminAllUser/BtnCreatUser';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import TableAllUsers from '../../../../Coponents/Admin/AdminUser/AdminAllUser/TableAllUsers';
import Pagination from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Pagination';
import { Link } from 'react-router-dom';
//import AdminSidebar from '../../../../Coponents/Admin/AdminSidebar';

export default function AdminAllUsersPage() {
  return (
    <div>
      <Overlay />
      <div className="container mb-5 pb-5">
        <Header title={'Admin Panel'} date={'6th june 2023'} />
        <Btn title={'creat new user'} path={'/admincreateuser'} />
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'users'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Title
              title={'Users'}
              placeholder={'Search In Users'}
              optionTitle={'Students'}
              option1={'User'}
              option2={'Instructor'}
              option3={'Admin'}
            />
            <TableAllUsers />
          </div>
        </div>
        <Pagination />
        <div className="row">
          <div className="col-12">
            <Link
              to={`/admincreateuser`}
              className="btnAppearInMQ text-center mb-0"
            >
              create new user
            </Link>
          </div>
          <div className="col-12">
            <Link
              to={`/adminuploadcertificate`}
              className="btnAppearInMQ text-center"
              style={{
                background: '#bf9b30',
              }}
            >
              Upload Certificates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
