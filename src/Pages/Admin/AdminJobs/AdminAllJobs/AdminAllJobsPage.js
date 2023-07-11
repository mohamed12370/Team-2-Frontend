import React from 'react';
import './AdminAllJobsPage.css';
import Overlay from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Overlay';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Btn from '../../../../Coponents/Admin/AdminUser/AdminAllUser/BtnCreatUser';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import Title from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Title&Search';
import JobListContainerLg from '../../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobListContainerLg';
import JobListContainer from '../../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobListContainer';
import { Link } from 'react-router-dom';
import Pagination from '../../../../Coponents/UserCourses/UserAllCourses/Pagination';

export default function AdminAllJobsPage() {
  return (
    <div>
      <Overlay />
      <div className="container mb-5 pb-5">
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
            <JobListContainerLg />
            <JobListContainer />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <Pagination />
          </div>
        </div>
        <div className="row">
          <div className="col pb-2">
            <Link
              to={`/admincreatejob`}
              className="btnAppearInMQ mb-0 text-center fs-5"
            >
              create new Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
