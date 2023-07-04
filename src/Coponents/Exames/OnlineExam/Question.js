import React from 'react';

export default function Question({ Question, img, marks, id }) {
  return (
    <div>
      {/*  start Questions   */}
      <div className="row col-12 m-0 p-4 pb-0 my-5 bg-opacity-25 bg-black  text-capitalize ">
        <div className="mt-lg-1 mt-0 ">
          <p className=" my-lg-3 mt-0 ques-num">question {id}</p>
          <h5 className="mb-2 ques-title">{Question}</h5>
        </div>
        <div className="  d-flex  mt-lg-2  mt-0 mb-lg-3 mb-0">
          <img
            src={img}
            className={
              img ? 'img-ques rounded-4 mt-lg-2  mt-4 mb-4 ' : 'd-none'
            }
            alt="quesimg"
          ></img>
        </div>
        <div className=" row col-lg-7 mt-4 mt-lg-2  col-12  m-0 ">
          <button type="button" className="btn   py-2   answer-btn text-start">
            {' '}
            A :{' '}
          </button>
          <button
            type="button"
            className="btn py-2  answer-btn my-4 text-start"
          >
            {' '}
            B :{' '}
          </button>
          <button
            type="button"
            className="btn py-2  answer-btn mb-3 text-start"
          >
            {' '}
            C :{' '}
          </button>
        </div>
        <div className="d-flex justify-content-end align-items-end ">
          <p className="me-lg-0 me-3 ">{marks}</p>
        </div>
      </div>
    </div>
  );
}
