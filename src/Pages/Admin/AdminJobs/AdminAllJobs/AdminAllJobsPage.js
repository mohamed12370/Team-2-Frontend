import React from 'react';
import Overlay from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Overlay';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Btn from '../../../../Coponents/Admin/AdminUser/AdminAllUser/BtnCreatUser';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import Pagination from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Pagination';

export default function AdminAllJobsPage() {
  return (
    <div>
      <Overlay />
      <div className="container">
        <Header title={'Admin Panel'} date={'6th june 2023'} />
        <Btn title={'creat new job'} path={'/admincreatejob'} />
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'jobs'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Title
              title={'Jobs'}
              placeholder={'Search In Jobs'}
              optionTitle={'Puplished'}
              option1={'Saved Drafts'}
            />
            {/* <TableAllUsers /> */}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
