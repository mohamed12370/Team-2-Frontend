import React from 'react';
import './AdminUploadCertificatePage.css';
import Header from '../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import Buttons from '../../../Coponents/Admin/AdminUploadCertificate/Buttons';
import Form from '../../../Coponents/Admin/AdminUploadCertificate/Form';

export default function AdminUploadCertificatePage() {
  return (
    <div>
      <div className="overlay"></div>
      <Header title={'Admin Panel'} date={'6th june 2023'} />
      <div className="containers">
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'users'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Title
              title={'Upload Certificate'}
              placeholder={'search in certificates'}
            />
            <Form />
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}
