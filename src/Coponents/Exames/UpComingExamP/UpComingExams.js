import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function UpComingExams({ title, instructor, Date, time, level }) {
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
            nan
          </span>
        </div>
        <div className="col-lg-2 col-12 m-0 row mt-2 mt-lg-0  justify-content-lg-end">
          <Link
            to={`/onlineexam/:id`}
            class=" btn join-btn text-uppercase"
            style={{ height: '40px' }}
          >
            join exam
          </Link>
        </div>
      </div>
    </>
  );
}

export default UpComingExams;
