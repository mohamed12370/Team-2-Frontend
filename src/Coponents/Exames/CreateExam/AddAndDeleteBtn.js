import React from 'react';
import { useState } from 'react';
import TypeOfQuestion from './TypeOfQuestion';

function AddAndDeleteBtn({
  Question,
  handleQuestionChange,
  mark,
  handleMarkChange,
  image,
  handleImageChange,
  questionType,
  handleSelectChange,
  WrittenAnswer,
  handleWrittenAnswerChange,
}) {
  const [questions, setQuestions] = useState([{ id: 0 }, { id: 1 }]);
  const handleDelete = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };
  const handleAdd = (index) => {
    const newQuestions = [...questions];
    const lastQuestion = newQuestions[newQuestions.length - 1];
    const newQuestion = { id: lastQuestion?.id ? lastQuestion?.id + 1 : 1 };
    newQuestions.splice(index, 0, newQuestion);
    setQuestions(newQuestions);
  };
  return (
    <div>
      {questions.slice(1).map((question, index) => (
        <div key={question.id}>
          <TypeOfQuestion
            id={question.id}
            onDelete={() => handleDelete(index + 1)}
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
        </div>
      ))}
      <div key={questions[0].id}>
        <TypeOfQuestion
          onAdd={() => handleAdd(questions.length)}
          hideDeleteButton={true}
        />
      </div>
    </div>
  );
}
export default AddAndDeleteBtn;
