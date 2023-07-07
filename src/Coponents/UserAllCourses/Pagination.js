import React from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Pagination = () => {
  return (
    <>
      <ul className="pagination-list m-0">
        <li className="pagiIcon">
          <MdNavigateBefore />
        </li>
        <li>
          <a className="page-link" href="#/">
            1
          </a>
        </li>
        <li>
          <a className="page-link" href="#/">
            2
          </a>
        </li>
        <li>
          <a className="page-link" href="#/">
            3 ......
          </a>
        </li>
        <li className="pagiIcon">
          <MdNavigateNext />
        </li>
      </ul>
    </>
  );
};

export default Pagination;
