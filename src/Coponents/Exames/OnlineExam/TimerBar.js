import React from 'react';

export default function TimerBar() {
  return (
    <div>
      {/*  start bar timer  */}
      <div class="mt-lg-3 mt-5 mx-2 mx-lg-0">
        {/*  strat timer  */}
        <div class="me-lg-5 me-0">
          <h4 class="text-white text-end fw-medium">55:00</h4>
        </div>
        {/*  start bar  */}
        <div class="bar mt-3 "></div>
      </div>
      {/*  end bar timer  */}
    </div>
  );
}
