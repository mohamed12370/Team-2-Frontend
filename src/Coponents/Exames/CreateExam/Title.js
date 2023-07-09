import React from 'react';

function Title({ title, subTitle, date, btnTitle }) {
  return (
    <div>
      <div className="exam-topic">
        <p className="create-text">{title}</p>
        <div className="line-hvr mb-1 "></div>
        <p className="create-text">{date}</p>
        <div className="exam-puplish">
          <h2>{subTitle}</h2>
          <button>{btnTitle}</button>
        </div>
      </div>
    </div>
  );
}

export default Title;
