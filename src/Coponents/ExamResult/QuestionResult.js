import React from 'react';
import QuestionResultCard from './QuestionResultCard';

const QuestionResult = () => {
  return (
    <div className="pb-3">
      {/*  start Questions answered   */}
      {/*  card 1  */}
      <QuestionResultCard
        title={'Number of questions answered'}
        numOfQuestion={'20 Questions'}
      />
      <QuestionResultCard
        title={'Number of questions answered'}
        numOfQuestion={'20 Questions'}
      />
      <QuestionResultCard
        title={'Number of questions answered'}
        numOfQuestion={'20 Questions'}
      />
      <QuestionResultCard
        title={'Time Taken'}
        numOfQuestion={'60:00 Minutes'}
      />
    </div>
  );
};

export default QuestionResult;
