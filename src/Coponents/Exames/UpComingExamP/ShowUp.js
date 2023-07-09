import React from 'react';
import UpComingExams from './UpComingExams';

function ShowExams() {
  const Upcoming = [
    {
      id: 1,
      title: 'Mobile application ',
      instructor: 'Islam Mohamed',
      level: 'Level.2',
      Date: 'Sunday, 2022-10-20',
      time: ' 2:00 AM',
    },
    {
      id: 2,
      title: 'Mobile application development',
      instructor: 'Islam Mohamed',
      level: 'Level.2',
      Date: 'Sunday,2022-10-20',
      time: ' 11:00 AM',
    },
  ];
  return (
    <>
      <div className="my-5">
        <h4 className="mb-4 text-capitalize ">upcoming exams</h4>
        {Upcoming.map((item, index) => {
          return <UpComingExams key={index} {...item} />;
        })}
      </div>
    </>
  );
}

export default ShowExams;
