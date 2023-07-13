import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function McqQuestion() {
  const [mcqAnswer, setmcqAnswer] = useState([
    { id: 0, value: '', isCorrect: false },
  ]);

  const addOption = () => {
    setmcqAnswer([
      ...mcqAnswer,
      { id: mcqAnswer.length, value: '', isCorrect: false },
    ]);
  };

  const removeOption = (id) => {
    setmcqAnswer(mcqAnswer.filter((option) => option.id !== id));
  };

  const handleOptionChange = (event , id, value ) => {      
    event.preventDefault();
    setmcqAnswer(
      mcqAnswer.map((option) =>
        option.id === id ? { ...option, value } : option
      )
    );
  };

  const handleCorrectChange = (event,  id, isCorrect) => {
    event.preventDefault();
      setmcqAnswer(
          mcqAnswer.map((option) =>
          option.id === id ? { ...option, isCorrect } : option
          )
          );
  };

      return (
        <>
  { mcqAnswer.map((option) => (
    <div className='row '>
    <div className="form-group col-md-7  position-relative " key={option.id}>
      <div className="d-flex justify-content-between w-100">
        <label htmlFor={`inputText${option.id}`} className="form-label">
          option
        </label>
        <span className=" d-md-none " ><FontAwesomeIcon onClick={() => removeOption(option.id)} icon={faTrashCan} className="" /></span>
      </div>
      <input
        type="text"
        className="form-control"
        id={`inputText${option.id}`}
        value={option.value}
        onChange={(event) => handleOptionChange(event, option.id, event.target.value)}
      />
      {mcqAnswer.length >= 1 && (
        <button
          className={`${
            option.isCorrect ? 'correct-button' : 'wrong-button'
          }`}
          onClick={(event) => handleCorrectChange(event ,  option.id, !option.isCorrect )}
        >
          <FontAwesomeIcon
            icon={option.isCorrect ? faCircleCheck : faCircleXmark}
            className="mt-1"
          />
          <span className=""> {option.isCorrect ? 'Correct' : 'Wrong'} answer </span>
        </button>
      )}
    </div>
      <div className=" col-md-2 mb-3">
                    <label for="inputPassword2" className="form-label "></label>
                    <div className=" d-md-flex d-none justify-content-end justify-content-md-start" ><FontAwesomeIcon onClick={() => removeOption(option.id)} icon={faTrashCan} className=' mt-md-3 mt-0' /></div>
                </div>
    </div>
    
  ))}
      <div className=" col-12 col-lg-8 can-pluse mb-3 justify-content-end ">
        <label htmlFor="inputPassword4" className="form-label"></label>
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="circle-plus "
          onClick={addOption}
        />
      </div>
    </>
  );
}
export default McqQuestion;
