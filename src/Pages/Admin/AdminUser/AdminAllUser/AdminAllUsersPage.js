import React from 'react';
import './AdminAllUserPage.css';
import Overlay from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Overlay';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Btn from '../../../../Coponents/Admin/AdminUser/AdminAllUser/BtnCreatUser';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import TableAllUsers from '../../../../Coponents/Admin/AdminUser/AdminAllUser/TableAllUsers';
import Pagination from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Pagination';
//import AdminSidebar from '../../../../Coponents/Admin/AdminSidebar';

export default function AdminAllUsersPage() {
  return (
    <div>
      <Overlay />
      <div className="container">
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
      </div>
    </div>
  );
}
