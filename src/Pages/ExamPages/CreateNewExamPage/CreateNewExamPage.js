import React, { useState } from 'react';
import './main.css';
import Title from '../../../Coponents/Exames/CreateExam/Title';
import ExamInfo from '../../../Coponents/Exames/CreateExam/ExamInfo';
import Buttons from '../../../Coponents/Exames/CreateExam/Buttons';
import AddAndDeleteBtn from '../../../Coponents/Exames/CreateExam/AddAndDeleteBtn';

export default function CreateNewExamPage() {
  // state object form field
  const [courseName, setCourseName] = useState('');
  const [level, setLevel] = useState('');
  const [fullMark, setFullMark] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [Question, setQuestion] = useState('');
  const [mark, setmark] = useState('');
  const [questionType, setquestionType] = useState(false);
  const [image, setimage] = useState('');
  const [WrittenAnswer, setwrettenAnswer] = useState('');
  // handle state change
  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };
  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };
  const handleFullMarkChange = (e) => {
    setFullMark(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleMarkChange = (e) => {
    setmark(e.target.value);
  };
  const handleImageChange = (e) => {
    setimage(e.target.files[0]);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setquestionType(selectedValue === 'show');
  };
  const handleWrittenAnswerChange = (e) => {
    setwrettenAnswer(e.target.value);
  };
  // handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const createData = new FormData();
    if (
      courseName === '' ||
      level === '' ||
      fullMark === '' ||
      date === '' ||
      time === '' ||
      duration === '' ||
      mark === '' ||
      questionType === '' ||
      Question === '' ||
      image === ''
    ) {
      //alert("Please fill out all fields");
      return;
    } else {
      createData.append('courseName', courseName);
      createData.append('level', level);
      createData.append('fullMark', fullMark);
      createData.append('date', date);
      createData.append('time', time);
      createData.append('duration', duration);
      createData.append('question', Question);
      createData.append('mark', mark);
      createData.append('questionType', questionType);
      createData.append('image', image);
      createData.append('WrittenAnswer', WrittenAnswer);
      // console.log(createData);
    }
  };

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
          <ExamInfo
            courseName={courseName}
            handleCourseNameChange={handleCourseNameChange}
            level={level}
            handleLevelChange={handleLevelChange}
            fullMark={fullMark}
            handleFullMarkChange={handleFullMarkChange}
            date={date}
            handleDateChange={handleDateChange}
            time={time}
            handleTimeChange={handleTimeChange}
            duration={duration}
            handleDurationChange={handleDurationChange}
          />
          <div class="main-questions">
            <AddAndDeleteBtn
              question={Question}
              handleQuestionChange={handleQuestionChange}
              mark={mark}
              handleMarkChange={handleMarkChange}
              questionType={questionType}
              handleSelectChange={handleSelectChange}
              image={image}
              handleImageChange={handleImageChange}
              WrittenAnswer={WrittenAnswer}
              handleWrittenAnswerChange={handleWrittenAnswerChange}
            />
            <Buttons handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}
