import React from 'react';
import CoursesContent from './CoursesContent';
import { Link } from 'react-router-dom';

export default function TableAllCourses() {
  const Courses = [
    {
      id: 1,
      title: 'Backend Development',
      status: 'On Going',
      instructor: 'Islam Mohamed',
      level: '3',
      startDate: '2019-04-28',
      publishedOn: '2020-11-01',
    },
    {
      id: 2,
      title: 'Frontend Development ',
      status: 'On Going',
      instructor: 'Bahaa Saber',
      level: '2',
      startDate: ' 2022-11-19',
      publishedOn: '2023-02-01',
    },
    {
      id: 3,
      title: 'Mobile application development',
      status: 'Ended',
      instructor: 'Islam Mohamed',
      level: '2',
      startDate: ' 2022-10-20',
      publishedOn: '2023-01-02',
    },
  ];
  return (
    <>
      {/*  cards courses  */}
      <div className="row p-0 fw-semibold d-none d-lg-flex  mt-4 mx-4">
        {/*  Title  */}
        <div className="col-2  px-0">
          <p>Title</p>
        </div>
        {/*  Status  */}
        <div className="col-2 d-flex justify-content-center">
          <p>Status</p>
        </div>
        {/*  Instructor  */}
        <div className="col-2 ">
          <p>Instructor</p>
        </div>
        {/*  Level  */}
        <div className="col-1 ">
          <p>Level</p>
        </div>
        {/*  Start date  */}
        <div className="col-2 ">
          <p>Start date</p>
        </div>
        {/*  Published On  */}
        <div className="col-2 px-0">
          <p>Published On</p>
        </div>
        {/*  emty  */}
        <div className="col-1 "></div>
      </div>
      {Courses.map((Card, index) => {
        return <CoursesContent key={index} {...Card} />;
      })}
      <div className="w-100 d-lg-none d-flex mt-5">
        <Link
          to={`/admincreatecourses`}
          className=" fs-6 btn btn-course  text-white"
        >
          CREATE NEW COURSE
        </Link>
      </div>
    </>
  );
}
