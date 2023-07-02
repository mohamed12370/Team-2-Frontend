import React from 'react';

const QuestionResult = () => {
  return (
    <>
      {/*  start Questions answered   */}
      {/*  card 1  */}
      <div className="row d-flex justify-content-between  align-items-center mt-3 m-0 p-0">
        <div className="Questions fw-semibold  mt-5 m-0 p-0  mt-lg-0   col-lg-5">
          <h4>Number of questions answered:</h4>
        </div>
        <div className=" me-lg-5  m-0 p-0 mt-1  mt-lg-0 col-lg-3">
          <button className="btn btn-question py-2  text-white fw-bold w-100">
            20 Questions
          </button>
        </div>
      </div>
      {/*  card   */}
      <div className="row d-flex justify-content-between  align-items-center mt-3 m-0 p-0">
        <div className="Questions fw-semibold  mt-5 m-0 p-0  mt-lg-0   col-lg-5">
          <h4>Number of questions not answered:</h4>
        </div>
        <div className=" me-lg-5  m-0 p-0 mt-1  mt-lg-0 col-lg-3">
          <button className="btn btn-question py-2  text-white fw-bold w-100">
            0 Questions
          </button>
        </div>
      </div>
      {/*  card 3  */}
      <div className="row d-flex justify-content-between  align-items-center mt-3 m-0 p-0">
        <div className="Questions fw-semibold  mt-5 m-0 p-0  mt-lg-0   col-lg-5">
          <h4>Number of questions answered correctly:</h4>
        </div>
        <div className=" me-lg-5  m-0 p-0 mt-1  mt-lg-0 col-lg-3">
          <button className="btn btn-question py-2  text-white fw-bold w-100">
            19 Questions
          </button>
        </div>
      </div>
      {/*  card 4  */}
      <div className="row d-flex justify-content-between  align-items-center mt-3 m-0 p-0">
        <div className="Questions fw-semibold  mt-5 m-0 p-0  mt-lg-0   col-lg-5">
          <h4>Number of wrong answers:</h4>
        </div>
        <div className=" me-lg-5  m-0 p-0 mt-1  mt-lg-0 col-lg-3">
          <button className="btn btn-question py-2  text-white fw-bold w-100">
            1 Answer
          </button>
        </div>
      </div>
      {/*  card 5  */}
      <div className="row d-flex justify-content-between  align-items-center mt-3 m-0 pb-5">
        <div className="Questions fw-semibold mt-5 m-0 p-0  mt-lg-0   col-lg-5">
          <h4>Time Taken:</h4>
        </div>
        <div className=" me-lg-5  m-0 p-0 mt-1  mt-lg-0 col-lg-3">
          <button className="btn btn-question py-2  text-white fw-bold w-100">
            60:00 Minutes
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionResult;
