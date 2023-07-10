import React from 'react';
import './job-list-style.css';
import HeaderDate from '../../../Coponents/UserJobs/HeaderDate';
import HeaderTitle from '../../../Coponents/UserJobs/HeaderTitle';
import SidebarFiltersLeft from '../../../Coponents/UserJobs/SidebarFiltersLeft';
import JobListForApplication from '../../../Coponents/UserJobs/JobListForApplication';

export default function UserAllJobsPage() {
  return (
    <>
      <div className="overlay"></div>
      <>
        <HeaderDate title={'Jobs'} date={'6th June 2023'} />
        <HeaderTitle />
        <section className="container">
          <div className="row py-5">
            <div className="col-12 col-lg-4 order-last order-lg-first ">
              <SidebarFiltersLeft showCreateCv={true} />
            </div>
            <div className="col-12 col-lg-8">
              <JobListForApplication />
            </div>
          </div>
        </section>
      </>
    </>
  );
}
