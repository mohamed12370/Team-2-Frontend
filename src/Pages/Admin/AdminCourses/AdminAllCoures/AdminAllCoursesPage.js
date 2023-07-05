import React from 'react';
import './style.css';
import Overlay from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Overlay';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Btn from '../../../../Coponents/Admin/AdminUser/AdminAllUser/BtnCreatUser';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import Pagination from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Pagination';
import TableAllCourses from '../../../../Coponents/Admin/AdminCourses/AdminAllCourses/TableAllCourses';

export default function AdminAllCoursesPage() {
  return (
    <div>
      <Overlay />
      <div className="container">
        <Header title={'Admin Panel'} date={'6th june 2023'} />
        <Btn title={'creat new course'} path={'/admincreatecourses'} />
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'courses'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Title title={'Courses'} placeholder={'Search In Courses'} />
            <TableAllCourses />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}