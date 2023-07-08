import React from 'react';

const Buttons = () => {
  return (
    <div className="row TwoButton">
      <div className=" col-md-3 col-sm-12 buttonFrist">
        <button className="BtnOne">Cancel</button>
      </div>
      <div className=" col-md-3 col-sm-12  buttonTwo">
        <button>Upload</button>
      </div>
    </div>
  );
};

export default Buttons;
