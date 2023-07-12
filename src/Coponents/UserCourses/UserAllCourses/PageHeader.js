import React from 'react';
const PageHeader = ({ next, pre }) => {
  return (
    <>
      <div className="parent1 text-white pt-5">
        <p className="mb-1">Courses</p>
        <div className="line1 mb-1"></div>
        <p>6th jun 2023</p>
      </div>

      <div className="icon-Newcourses text-white  d-flex justify-content-between mt-5">
        <h5>New Courses</h5>
        <div>
          <button
            className="border-none bg-transparent rounded-pill"
            onClick={pre}
          >
            <i className="fa-solid fa-circle-chevron-left "></i>
          </button>
          &nbsp;
          <button
            className="border-none bg-transparent rounded-pill"
            onClick={next}
          >
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
