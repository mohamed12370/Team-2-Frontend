import React from 'react';
import './AdminApplicationJobPage.css';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import AdminSectionTitle from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/AdminSectionTitle';
import HeaderTitleShrok from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/HeaderTitleShrok';
import JobApplicationsContainer from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/JobApplicationsContainer';
import JobApplicationsContainerLg from '../../../../Coponents/Admin/AdminJobs/AdminApplicationJob/JobApplicationsContainerLg';
import Pagination from '../../../../Coponents/UserCourses/UserAllCourses/Pagination';

export default function AdminApplicationJobPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="container mb-5 pb-5">
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
