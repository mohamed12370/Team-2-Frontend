import React from 'react';
import './style.css';
import CircleProgress from '../../Coponents/ExamResult/CircleProgress';
import QuestionResult from '../../Coponents/ExamResult/QuestionResult';
import TitleExamResult from '../../Coponents/ExamResult/TitleExamResult';
import TimerBar from '../../Coponents/ExamResult/TimerBar';

function ExamResultPage() {
  return (
    <div>
      <section className="bg-exam">
        <div className="overlay-exam text-light">
          <div className="container">
            <TitleExamResult />
            <TimerBar />
            <div className="mx-2 mx-lg-0  view-answered mt-5">
              <CircleProgress />
              <QuestionResult />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExamResultPage;
