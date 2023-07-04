import React from 'react';
// import { Pagination } from "react-bootstrap"
// import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example" className="border-0">
      <ul className="pagination d-flex justify-content-end pb-2 m-0">
        <li className="page-item border-0">
          <a className="page-link" href="#/" aria-label="Previous">
            <span aria-hidden="true">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span className="sr-only">1</span>
          </a>
        </li>
        <li className="page-item border-0">
          <a className="page-link " href="#/">
            1
          </a>
        </li>
        <li className="page-item border-0">
          <a className="page-link" href="#/">
            2
          </a>
        </li>
        <li className="page-item border-0">
          <a className="page-link" href="#/">
            3
          </a>
        </li>
        <li className="page-item border-0">
          <a className="page-link" href="#/" aria-label="Next">
            <span aria-hidden="true">
              <i class="fas fa-chevron-right"></i>
            </span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
