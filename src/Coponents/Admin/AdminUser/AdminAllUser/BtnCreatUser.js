import React from 'react';
import { Link } from 'react-router-dom';

const Btn = () => {
  return (
    <div className="d-flex justify-content-end">
      <button className="creatUser">
        <Link to={`/admincreateuser`}>creat new user</Link>
      </button>
    </div>
  );
};

export default Btn;
