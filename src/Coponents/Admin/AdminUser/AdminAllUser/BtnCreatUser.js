import React from 'react';
import { Link } from 'react-router-dom';

const Btn = ({ title, path }) => {
  return (
    <div className="d-flex justify-content-end">
      <button className="creatUser">
        <Link to={`${path}`}>{title}</Link>
      </button>
    </div>
  );
};

export default Btn;
