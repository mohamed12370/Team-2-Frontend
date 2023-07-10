import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function PreviousExams({ title, instructor, Date, time, level, degree }) {
  return (
    <>
      <div className="row m-0  mb-3 bg-black bg-opacity-25 p-lg-4 p-3 rounded ">
        <div className="col-lg-3 col-12">
          <div className="mb-1">
            <FontAwesomeIcon icon={faCalendarDays} className="title-icon" />
            <span className=""> {Date} </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faStopwatch} className="title-icon" />
            <span className=""> {time} </span>
          </div>
        </div>
        <div className="col-lg-4 col-12 my-4 my-lg-0 ">
          <div>
            <h5 className=" text-capitalize ">{title}</h5>
            <span className=" text-capitalize ">
              <span className="ins-name"> instractor : </span>
              {instructor}
            </span>
          </div>
        </div>
        <div className="col-lg-2 col-6  ">
          <h5 className=" text-uppercase  fw-semibold ">{level}</h5>
        </div>
        <div className="col-lg-1  col-6">
          <span className=" text-uppercase d-flex justify-content-end  d-lg-block">
            {degree}
          </span>
        </div>
        <div className="col-lg-2 col-12">
          <Link
            to={`/examresult/:id`}
            className="text-light py-2 px-1 rounded"
            style={{ backgroundColor: '#bf9b30' }}
          >
            ShowExamResult
          </Link>
        </div>
      </div>
    </>
  );
}

export default PreviousExams;
