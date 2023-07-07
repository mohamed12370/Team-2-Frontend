import React, { useState } from 'react';
import Lesson from './Lesson';
import AddBtn from './AddBtn';

export default function AddAndDeleteBtnUpdateCourse() {
  const [questions, setQuestions] = useState([{ id: 1 }]);
  const handleDelete = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleAdd = (index) => {
    const newQuestions = [...questions];
    const lastQuestion = newQuestions[newQuestions.length - 1];
    const newQuestion = { id: lastQuestion?.id ? lastQuestion.id + 1 : 1 };
    newQuestions.splice(index, 0, newQuestion);
    setQuestions(newQuestions);
  };

  return (
    <>
      {questions.slice(0).map((question, index) => (
        <div key={question.id} className="   order-2 order-lg-1 col-lg-10">
          <Lesson id={question.id} onDelete={() => handleDelete(index)} />
        </div>
      ))}
      <AddBtn onAdd={() => handleAdd(questions.length)} />
    </>
  );
}
