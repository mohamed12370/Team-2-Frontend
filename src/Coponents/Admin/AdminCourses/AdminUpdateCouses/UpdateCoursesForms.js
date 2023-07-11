import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import logoupload from '../../../../Images/Image upload-bro.svg';

export default function UpdateCoursesForms() {
  const [inputType, setInputType] = useState('text');

  const handleFocus = () => {
    setInputType('date');
  };
  const handleFocusT = () => {
    setInputType('time');
  };

  const handleBlur = () => {
    setInputType('text');
  };
  return (
    <>
      {/*  title  */}
      <div className="mt-1 mt-lg-4 row justify-content-between align-items-center">
        <div className="online-exam-hvr2 col-12 col-md-5">
          <h6 className="mb-3 fw-semibold">Update Course Details</h6>
          <div className="line-hvr d-none d-lg-block"></div>
        </div>
        <div className="col-2 btn  btn-publish d-none d-md-inline text-white">
          PUBLISH
        </div>
      </div>
      {/* form 1  */}
      <div className="form-course">
        <h4 className="d-lg-none">course information</h4>
        {/* course name */}
        <div className="row g-3 mt-2">
          <div className="col-md-5">
            <div className="form-outline">
              <label className="form-label" for="form10Example1">
                <p className="mb-0">Course Name</p>
              </label>
              <input
                type="text"
                id="form10Example1"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" for="form10Example2">
                <p className="mb-0">Level</p>
              </label>
              <input
                type="text"
                id="form10Example2"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                <p className="mb-0">Number of Lessons</p>
              </label>
              <input
                type="text"
                id="form10Example3"
                className="form-control"
              ></input>
            </div>
          </div>
        </div>
        {/* date and Duration */}
        <div className="row g-4 mt-0">
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example1">
                <p className="mb-0">Language</p>
              </label>
              <input
                type="text"
                id="form10Example1"
                className="form-control"
              ></input>
            </div>
          </div>
          {/* inner icon Start Date */}
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                <p className="mb-0">Start Date</p>
              </label>
              <div className="pls-icon">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  id="form10Example3"
                  className="form-control"
                ></input>
                <div className="icon">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
              </div>
            </div>
          </div>
          {/* inner icon Duration */}
          <div className="col-md-3">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                <p className="mb-0">Duration</p>
              </label>
              <div className="pls-icon">
                <input
                  type="text"
                  placeholder="00:00 AM"
                  onFocus={handleFocusT}
                  onBlur={handleBlur}
                  id="form10Example3"
                  className="form-control"
                ></input>
                <div className="icon">
                  <FontAwesomeIcon icon={faStopwatch} />
                </div>
              </div>
            </div>
          </div>
          {/* publish-hidden-lg publishing date */}
          <div className="d-block d-md-none">
            <div className="form-outline">
              <label className="form-label" htmlFor="form10Example3">
                {' '}
                <p className="mb-0">publishing date</p>{' '}
              </label>
              <div className="pls-icon">
                <input
                  type="text"
                  id="form10Example3"
                  placeholder="mm/dd/yyyy"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="form-control"
                ></input>
                <div className="icon">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
              </div>
            </div>
          </div>
          {/* Certificate */}
          <div className="col-md-3 mb-5 ">
            <div className="form-outline position-relative ">
              <label className="form-label">
                {' '}
                <p className="mb-0">Certificate </p>
              </label>
              <select
                className="input form-select p-2 opacity-100 createCourse-select"
                name="languages"
                id="language-select"
                // onFocus={(e) => {
                //   e.target.size = 6;
                // }}
                // onBlur={(e) => {
                //   e.target.size = 0;
                // }}
                // onChange={(e) => {
                //   e.target.size = 1;
                //   e.target.blur();
                // }}
              >
                <option value="">select Certificate</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* form 2 */}
      <div className="form-course mt-4 mt-lg-0">
        {/* Course Introduction */}
        <div className="form-outline  mt-4">
          <label className="form-label " htmlFor="form7Example1">
            <p className="mb-0">Course Introduction</p>
          </label>
          <textarea
            id="form7Example1"
            className="form-control input1 pb-5 Introduction Introduction-sm"
          ></textarea>
        </div>
        {/* Course Assessment and Course Requirements */}
        <div className="row mt-4 g-2">
          <div className="col-12 col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="form6Example1">
                <p className="mb-0">Course Assessment</p>
              </label>
              <textarea
                id="form6Example1"
                className="form-control input1 Introduction-2"
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="form6Example2">
                <p className="mb-0">Course Requirements</p>
              </label>
              <textarea
                id="form6Example1"
                className="form-control input1 Introduction-2"
              ></textarea>
            </div>
          </div>
        </div>
        {/* Course Materials */}
        <div className="form-outline mt-4">
          <label className="form-label " htmlFor="form7Example1">
            <p className="mb-0">Course Materials</p>
          </label>
          <textarea
            type="text"
            id="form6Example1"
            className="form-control input1 Introduction-2"
          ></textarea>
        </div>
        {/* publish-hidden-sm */}
        <div className="d-md-block publish-hidden  d-none col-6">
          <div className="form-outline w-50">
            <label className="form-label" htmlFor="form10Example3">
              publishing date
            </label>
            <div className="pls-icon">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                onFocus={handleFocus}
                onBlur={handleBlur}
                id="form10Example3"
                className="form-control"
              />
              <div className="icon">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
            </div>
          </div>
        </div>
        {/* card upload */}
        <div className="upload mt-4">
          <h6 className="mb-3 title-upload d-none d-lg-block">
            Upload Cover Photo
          </h6>
          <div className="card-upload text-center bg-opacity-10 bg-dark p-5">
            <div className="card-hover position-relative">
              <input type="file" className="position-absolute file"></input>
              <img className="svg-upload" src={logoupload} alt=".."></img>
              <h6 className="drog-drop mt-3">
                Drag & drop files or{' '}
                <span className="browse btn-link" id="browse" type="files">
                  Browse
                </span>{' '}
              </h6>
            </div>
            <span className="supported-text text-white-50 text-opacity-50">
              Supported formates:
              <span className="supported-type">
                {' '}
                JPEG, PNG, GIF, MP4, PDF, PSD, Al, Word, PPT
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
