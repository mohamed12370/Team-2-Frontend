import React from 'react';

export default function Buttons() {
  return (
    <div>
      <div className="buttons pb-5 m-0 mt-5 row justify-content-center justify-content-md-end ">
        <button className="btn mt-3 cancel-btn col-12 py-lg-2 col-md-2 me-0 me-lg-3 mx-md-auto mx-lg-0 text-uppercase  fw-semibold">
          cancel
        </button>
        <button className="btn mt-3 save-btn col-12 py-lg-2 col-md-2  text-uppercase mx-md-auto mx-lg-0 fw-semibold">
          submit
        </button>
      </div>
    </div>
  );
}
