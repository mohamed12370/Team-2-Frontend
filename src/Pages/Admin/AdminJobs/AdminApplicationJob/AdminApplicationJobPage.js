import React from 'react';
import './AdminApplicationJobPage.css';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Pagination from '../../../../Coponents/UserAllCourses/Pagination';
import AdminSectionTitle from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/AdminSectionTitle';
import HeaderTitleShrok from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/HeaderTitleShrok';
import JobApplicationsContainer from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/JobApplicationsContainer';
import JobApplicationsContainerLg from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/JobApplicationsContainerLg';

export default function AdminApplicationJobPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="container">
        <HeaderTitleShrok />
        <div className="row">
          <div className="col-lg-3">
            <Side activeTitle={'jobs'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <AdminSectionTitle />
            <JobApplicationsContainerLg />
            <JobApplicationsContainer />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
