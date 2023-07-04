import React from 'react';

const TimerBar = () => {
  return (
    <div>
      {/*  start bar timer  */}
      <div className="mt-lg-3 mt-5 mx-2 mx-lg-0">
        {/*  strat timer  */}
        <div className="me-lg-5 me-0">
          <h4 className="text-white text-end fw-medium">60:00</h4>
        </div>
        {/*  start bar  */}
        <div className="bar mt-3"></div>
      </div>
      {/*  end bar timer  */}
    </div>
  );
};

export default TimerBar;
