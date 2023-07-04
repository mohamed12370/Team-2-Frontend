import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgress = () => {
  const percentage1 = 90;
  const NumOfQuestion = 20;

  return (
    <>
      <div className="row d-flex justify-content-between  align-items-center m-0 p-0">
        <div className="progres-ovrly text-center col-lg-5">
          <div className="progres-circle my-5 position-relative">
            <CircularProgressbar
              value={percentage1}
              className="circle-progress-outside"
            />
            <CircularProgressbar
              value={percentage1}
              text={`${(percentage1 / 100) * NumOfQuestion}/${NumOfQuestion}`}
              className="circle-progress-inside position-absolute start-0"
            />
          </div>
        </div>
        <div className="btn-progress me-lg-5 mt-5 m-0 p-0  mt-lg-0 col-lg-3">
          <button className="btn   text-white fw-bold w-100 text-uppercase">
            view answers
          </button>
        </div>
      </div>
    </>
  );
};

export default CircleProgress;
