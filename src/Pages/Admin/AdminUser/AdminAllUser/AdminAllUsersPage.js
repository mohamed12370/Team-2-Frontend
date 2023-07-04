import React from 'react';
import Overlay from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Overlay';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Btn from '../../../../Coponents/Admin/AdminUser/AdminAllUser/BtnCreatUser';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import Table from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Table';
import Pagination from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Pagination';

export default function AdminAllUsersPage() {
  return (
    <div>
      <Overlay />

      <div className="containers">
        <Header />
        <Btn />
        <div className="row">
          <div className="col-lg-3">
            <Side />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Title />
            <Table />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
