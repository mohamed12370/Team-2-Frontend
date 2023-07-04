import React from 'react';

export default function QuestionResultCard({ title, numOfQuestion }) {
  return (
    <div className="row d-flex justify-content-between  align-items-center mt-3 m-0 p-0">
      <div className="Questions fw-semibold  mt-5 m-0 p-0  mt-lg-0   col-lg-5">
        <h4>{title}:</h4>
      </div>
      <div className=" me-lg-5 m-0 p-0 mt-1 mt-lg-0 col-lg-3 d-flex justify-content-center align-items-center">
        <button className="btn btn-question py-2  text-white fw-bold w-100 d-flex justify-content-center align-items-center">
          {numOfQuestion}
        </button>
      </div>
    </div>
  );
}
