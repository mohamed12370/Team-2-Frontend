import React from 'react';

const Header = ({ title, date }) => {
  return (
    <div className="container pt-5">
      <h6 className="Header">{title}</h6>
      <h6 className="Header2">{date}</h6>
    </div>
  );
};

export default Header;
