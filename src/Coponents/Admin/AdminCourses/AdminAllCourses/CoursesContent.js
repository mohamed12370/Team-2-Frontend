import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function CoursesContent({
  title,
  status,
  instructor,
  level,
  startDate,
  publishedOn,
}) {
  return (
    <>
      {/*  card 1  */}
      <div className="row mx-0 mb-3 card-courses px-4 py-4  bg-black bg-opacity-25  align-items-center ">
        {/*  course name  */}
        <div className="col-lg-2 d-lg-none justify-content-between row col-12 px-0 pt-2">
          <p className=" col-8 col-md-9 fw-semibold fs-4 text-capitalize mb-lg-0">
            course name
          </p>
          {status === 'On Going' ? (
            <button
              className="btn col-4 col-md-3 pt-md-2 text-white ongoing  text-capitalize"
              href="/#"
            >
              {status}
            </button>
          ) : (
            <button
              className="btn col-4 col-md-3 pt-md-2 text-white ended  text-capitalize"
              href="/#"
            >
              {status}
            </button>
          )}
        </div>
        <div className="col-lg-2 col-12 mt-3 mt-lg-0 px-0 ">
          <p className="mb-lg-0">{title}</p>
        </div>
        {/*  on going  */}
        <div className="col-lg-2 col-md-3 col-5 mt-3 mt-lg-0 d-lg-flex d-none justify-content-end   justify-content-lg-center">
          {status === 'On Going' ? (
            <button
              className="btn text-white ongoing  text-capitalize"
              href="/#"
            >
              {status}
            </button>
          ) : (
            <button
              className="btn text-white ended   text-capitalize"
              href="/#"
            >
              {status}
            </button>
          )}
        </div>
        {/*  Instructor  */}
        <div className="col-lg-2 col-7 mt-3 mt-lg-0 ">
          <p className="fw-semibold fs-4 d-lg-none text-capitalize ">
            instructor
          </p>
          <p className="mb-lg-0">{instructor}</p>
        </div>
        {/*  Level  */}
        <div className="col-lg-1 col-5 mt-3 mt-lg-0  d-lg-flex justify-content-lg-center">
          <p className="fw-semibold fs-4 d-lg-none text-capitalize">level</p>
          <p className="mb-lg-0">{level}</p>
        </div>
        {/*  Start Date  */}
        <div className="col-lg-2 col-7 mt-3 mt-lg-0  ">
          <p className="fw-semibold fs-4 d-lg-none text-capitalize">
            start Date
          </p>
          <p className="mb-lg-0">{startDate}</p>
        </div>
        {/*  Published On  */}
        <div className="col-lg-2 col-5 mt-3 mt-lg-0  px-0">
          <p className="fw-semibold fs-4 d-lg-none text-capitalize">
            PublishedOn
          </p>
          <p className="mb-lg-0">{publishedOn}</p>
        </div>
        {/*  edit and delet  */}
        <div className="col-lg-1 col-12 d-flex justify-content-end justify-content-lg-around pe-0 ">
          <Link to={`/adminupdatecourses/:id`}>
            <FontAwesomeIcon icon={faPenToSquare} className="pt-1 edit me-2" />
          </Link>
          <a href="/#">
            <FontAwesomeIcon icon={faTrashCan} className="pt-1 delete" />
          </a>
        </div>
      </div>
    </>
  );
}

export default CoursesContent;
