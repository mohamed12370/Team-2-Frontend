import React, { useState } from 'react';
import './AdminUploadCertificatePage.css';
import Header from '../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import Buttons from '../../../Coponents/Admin/AdminUploadCertificate/Buttons';
import Form from '../../../Coponents/Admin/AdminUploadCertificate/Form';

export default function AdminUploadCertificatePage() {
  // use state variable
  const [studentName, setstudentName] = useState('');
  const [dateAcquired, setdateAcquired] = useState('');
  const [uploadDate, setuploadDate] = useState('');
  const [courseTitle, setcourseTitle] = useState('');

  // handle state change
  const handleStudentName = (e) => {
    setstudentName(e.target.value);
  };
  const handleDateAcquired = (e) => {
    setdateAcquired(e.target.value);
  };
  const handleCourseTitle = (e) => {
    setcourseTitle(e.target.value);
  };
  const handleUploadDate = (e) => {
    setuploadDate(e.target.value);
  };
  // const handleUploadCertificate = (e) => {
  //   setuploadCertificate(e.target.value)
  // }

  // handle certificate submission
  const handlesubmit = (e) => {
    e.preventDefault();
    const jobData = new FormData();
    jobData.append('studentName', studentName);
    jobData.append('dateAcquired', dateAcquired);
    jobData.append('courseTitle', courseTitle);
    jobData.append('uploadDate', uploadDate);
    // jobData.append("uploadCertificate", uploadCertificate);
  };

  return (
    <div>
      <div className="overlay"></div>
      <Header title={'Admin Panel'} date={'6th june 2023'} />
      <div className="containers mb-5 pb-5">
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
