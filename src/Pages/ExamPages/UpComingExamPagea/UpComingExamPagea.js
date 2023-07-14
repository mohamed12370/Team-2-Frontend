import React from 'react';
import './UpComingExamPagea.css';
import Title from '../../../Coponents/Exames/UpComingExamP/Title';
import ShowPre from '../../../Coponents/Exames/UpComingExamP/ShowPre';
import ShowExams from '../../../Coponents/Exames/UpComingExamP/ShowUp';
import Pagination from '../../../Coponents/Exames/UpComingExamP/Pagination';

export default function UpComingExamPagea() {
  return (
    <>
      <section className="">
        <div className="overlay text-light "> </div>
          <div className="container">
            <Title />
            <ShowExams />
            <ShowPre />
            <Pagination />
          </div>
       
      </section>
    </>
  );
}
