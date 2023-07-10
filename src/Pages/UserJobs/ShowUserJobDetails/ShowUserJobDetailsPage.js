import React from 'react';
import HeaderDate from '../../../Coponents/UserJobs/HeaderDate';
import HeaderTitle from '../../../Coponents/UserJobs/HeaderTitle';
import SidebarFiltersLeft from '../../../Coponents/UserJobs/SidebarFiltersLeft';
import CardUserJobDetaisl from '../../../Coponents/UserJobs/CardUserJobDetaisl';

export default function ShowUserJobDetailsPage() {
  return (
    <>
      <div className="overlay"></div>
      <>
        <HeaderDate title={'Job'} date={'6th June 2023'} />
        <HeaderTitle />
        <section className="container">
          <div className="row py-5">
            <div className="col-12 col-lg-4 order-last order-lg-first ">
              <SidebarFiltersLeft showCreateCv={false} />
            </div>
            <div className="col-12 col-lg-8">
              <CardUserJobDetaisl pathApply={`/userapplyforjob/:id`} />
            </div>
          </div>
        </section>
      </>
    </>
  );
}
