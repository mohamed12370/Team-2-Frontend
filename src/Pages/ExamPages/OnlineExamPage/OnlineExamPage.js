import React from 'react';
import './OnlineExamPage.css';
import TitleExamResult from '../../../Coponents/Exames/ExamResult/TitleExamResult';
import ValiQuestion from '../../../Coponents/Exames/OnlineExam/ValiQuestion';
import Buttons from '../../../Coponents/Exames/OnlineExam/Buttons';
import TimerBar from '../../../Coponents/Exames/OnlineExam/TimerBar';

export default function OnlineExamPage() {
  return (
    <div>
      <section className="">
        <div className="overlay text-light"></div>
        <div className="container">
          <TitleExamResult />
          <TimerBar duration={1} />
          <ValiQuestion />
          <Buttons />
        </div>
      </section>
    </div>
  );
}
