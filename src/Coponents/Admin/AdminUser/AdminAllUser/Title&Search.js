import React from 'react';

const Title = ({ title, placeholder, option1, option2, option3 }) => {
  return (
    <>
      <div className="d-flex justify-content-between my-5 title ">
        <div>
          <h5>{title}</h5>
        </div>
        <div className="adminSearch">
          <input type="text" placeholder={placeholder}></input>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="custom-select">
        <select>
          <option value={option1}>{option1}</option>
          <option value={option2}>{option2}</option>
          <option value={option3}>{option3}</option>
        </select>
        {/* <button>
              Students
              <i class="fas fa-chevron-top"></i>
            </button> */}
      </div>
    </>
  );
};

export default Title;
