import React from 'react';
import './style.css';
import TitleExamResult from '../../../Coponents/Exames/ExamResult/TitleExamResult';
import TimerBar from '../../../Coponents/Exames/ExamResult/TimerBar';
import CircleProgress from '../../../Coponents/Exames/ExamResult/CircleProgress';
import QuestionResult from '../../../Coponents/Exames/ExamResult/QuestionResult';

function ExamResultPage() {
  return (
    <div>
      <section className="">
        <div className="overlay text-light mb-5 pb-5"></div>
        <div className="container">
          <TitleExamResult />
          <TimerBar />
          <div className="mx-2 mx-lg-0  view-answered mt-5">
            <CircleProgress />
            <QuestionResult />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExamResultPage;
