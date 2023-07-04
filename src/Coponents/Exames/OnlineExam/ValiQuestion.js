import React from 'react';
import Question from './Question';
import code1 from '../../../Images/code-snap.png';
import code2 from '../../../Images/code-snap.png';

export default function ValiQuestion() {
  const questions = [
    {
      id: 1,
      Question: 'choose the right option out the following :',
      img: code1,
      marks: '2 marks',
    },
    {
      id: 2,
      Question: 'what is the type used in the following exmple :',
      img: '',
      marks: '3 marks',
    },
    {
      id: 3,
      Question: 'what is the type of function  used in the following exmple :',
      img: code2,
      marks: '2 marks',
    },
    {
      id: 4,
      Question: 'choose the right option out the following :',
      img: '',
      marks: '3 marks',
    },
    {
      id: 5,
      Question: 'choose the right option out the following :',
      img: '',
      marks: '3 marks',
    },
  ];

  return (
    <>
      {questions.map((ques, index) => {
        return <Question key={index} {...ques} />;
      })}
    </>
  );
}
