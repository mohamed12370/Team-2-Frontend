import React from 'react';

function Buttons({ handleSubmit }) {
  return (
    <>
      <div className="command-buttons ">
        <button className="cancel">cancel</button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="border-none text-light py-2 px-5 rounded ms-0 ms-lg-2"
          style={{ backgroundColor: '#e7bc3c' }}
        >
          save
        </button>
      </div>
    </>
  );
}

export default Buttons;
