import React from 'react';
import Pagination from './Pagination';
import CoursesArrayData from './CoursesArrayData';
import img from '../../../Images/Python.svg.png';
import { Link } from 'react-router-dom';

const OtherCourses = () => {
  return (
    <div>
      <div className="container parent-othercourses mt-5">
        <div className="content-othercourses row p-0 m-0 mt-2">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="row">
              <div className="col-12 col-lg-3"></div>
              <div className="pp2 col-lg-9 mt-4 mt-lg-0"></div>
            </div>
          </div>
          <div className="mt-3 col-lg-3 d-flex align-items-center  ">
            <p>Start Data</p>
          </div>
          <div className="mt-3 col-lg-1 d-flex align-items-center justify-content-center d-none d-lg-flex ">
            <p>Level</p>
          </div>

          <div className="btn-views col-lg-2 d-flex align-items-center">
            <div className="btnEnroll "></div>
          </div>
        </div>

        <div className="content-othercourses row  p-0 m-0 mt-2">
          {CoursesArrayData.map((course) => {
            return (
              <>
                <div
                  key={course.id}
                  className=" col-lg-6 d-flex align-items-center mb-3 "
                >
                  <div className="row">
                    <div className="col-12 col-lg-3 img-basic">
                      <img src={img} alt="" className="me-lg-3 w-100" />
                    </div>
                    <div className="pp2 col-lg-9 mt-4 mt-lg-0 d-flex justify-content-between">
                      <div className="Html-basic">
                        <p className="p1basic mb-1">{course.title}</p>
                        <p className="mb-1 ">{course.noOfLessons}</p>
                        <span className="span1"> Introductor : &nbsp;</span>
                        <span className="span2">{course.instructor}</span>
                      </div>
                      <div className="d-lg-none d-sm-flex justify-content-end align-items-start div-LEV1">
                        <span>LEV.1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1 col-lg-3  d-flex align-items-center div-start">
                  <span className="d-flex d-lg-none span">
                    Start Data : &nbsp;
                  </span>
                  <span> {course.date}</span>
                </div>
                <div className="mt-3 col-lg-1  align-items-center justify-content-center d-none d-lg-flex ">
                  <p>1</p>
                </div>
                <div className="btn-views col-lg-2 d-flex align-items-center mb-4 mt-2">
                  <div className="min ">
                    <button className=" btn w-75 mb-2 d-flex justify-content-center mx-auto">
                      ENROLL
                    </button>
                    <Link
                      to={`/usercoursesdetails/:id`}
                      className="d-flex justify-content-lg-center justify-content-end"
                    >
                      View Deatils
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default OtherCourses;
