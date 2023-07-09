import React from 'react';
import './main.css';
import Title from '../../../Coponents/Exames/CreateExam/Title';
import ExamInfo from '../../../Coponents/Exames/CreateExam/ExamInfo';
import Buttons from '../../../Coponents/Exames/CreateExam/Buttons';
import AddAndDeleteBtn from '../../../Coponents/Exames/CreateExam/AddAndDeleteBtn';

export default function CreateNewExamPage() {
  return (
    <>
      <div class="main-overlay">
        <div class="container">
          <Title
            title={'create new exam'}
            subTitle={'add exam details'}
            date={'6th june 2023'}
            btnTitle={'puplish'}
          />
          <ExamInfo />
          <div class="main-questions">
            <AddAndDeleteBtn />
            <Buttons />
          </div>
        </div>
      </div>
    </>
  );
}
