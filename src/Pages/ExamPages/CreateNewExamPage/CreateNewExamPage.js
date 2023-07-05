import React from 'react';
import './main.css';
import AddQuestion from '../../../Coponents/Exames/CreateExam/AddQuestion';
import Title from '../../../Coponents/Exames/CreateExam/Title';
import ExamInfo from '../../../Coponents/Exames/CreateExam/ExamInfo';
import Buttons from '../../../Coponents/Exames/CreateExam/Buttons';

export default function CreateNewExamPage() {
  return (
    <div>
      <div class="overlay"></div>
      <div class="container">
        <Title />
        <ExamInfo />
        <div class="main-questions">
          <AddQuestion />
          <Buttons />
        </div>
      </div>
    </div>
  );
}
