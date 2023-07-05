import React from "react";
import {MdNavigateNext,MdNavigateBefore}from'react-icons/md'
const Pagination = () => {
    
  return (
    <>
    {/* <div className="pagination d-flex justify-content-end">
    <a className="paginationBtn" href="#"><GrFormPrevious/>
      </a>
      <p className="pagination-pages"> 1  2  3....</p>
      
      <a className="paginationBtn" href="#" >
        <GrFormNext/>
      </a>
    </div> */}
    <ul className="pagination-list">
    <li className="pagiIcon"><MdNavigateBefore/></li>
    <li ><a className="page-link" href="#">1</a></li>
    <li ><a className="page-link" href="#">2</a></li>
    <li ><a className="page-link" href="#">3 ......</a></li>
    <li className="pagiIcon"><MdNavigateNext/></li>
  </ul>


    </>
  );
};

export default Pagination;
