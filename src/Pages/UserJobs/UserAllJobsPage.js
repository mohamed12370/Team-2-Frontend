import React from 'react';
import './job-list-style.css';
import HeaderDate from '../../Coponents/UserJobs/HeaderDate';
import HeaderTitle from '../../Coponents/UserJobs/HeaderTitle';
import SidebarFiltersLeft from '../../Coponents/UserJobs/SidebarFiltersLeft';
import JobListForApplication from '../../Coponents/UserJobs/JobListForApplication';

export default function UserAllJobsPage() {
  return (
    <>
      <div className="overlay"></div>
      <>
        <HeaderDate />
        <HeaderTitle />
        <section className="container">
          <div className="row pt-3">
            <div className="col-12 col-lg-4 order-last order-lg-first ">
              <SidebarFiltersLeft />
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
