import React from 'react';
import './OnlineExamPage.css';
import TitleExamResult from '../../../Coponents/Exames/ExamResult/TitleExamResult';
import TimerBar from '../../../Coponents/Exames/ExamResult/TimerBar';
import ValiQuestion from '../../../Coponents/Exames/OnlineExam/ValiQuestion';
import Buttons from '../../../Coponents/Exames/OnlineExam/Buttons';

export default function OnlineExamPage() {
  return (
    <div>
      <section className="">
        <div className="overlay-exam text-light h-auto">
          <div className="container">
            <TitleExamResult />
            <TimerBar />
            <ValiQuestion />
            <Buttons />
          </div>
        </div>
      </section>
    </div>
  );
}
