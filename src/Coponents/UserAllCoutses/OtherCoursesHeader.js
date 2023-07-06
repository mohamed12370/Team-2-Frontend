import React from 'react';

const OtherCoursesHeader = () => {
  return (
    <>
      <div className="p-0 m-0 text-white parent2 row justify-content-lg-between  mt-5 ">
        <div className="col-md-4 ">
          <h5>Others Courses</h5>
        </div>
        <div className="inp1 col-md-8">
          <input
            type="search"
            placeholder="Search For Courses"
            className="w-100"
          />
          <i className="fa-solid fa-magnifying-glass searchI"></i>
        </div>
      </div>
    </>
  );
};

export default OtherCoursesHeader;
