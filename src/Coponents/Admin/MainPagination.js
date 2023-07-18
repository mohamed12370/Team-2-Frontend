import React from 'react';
import ReactPaginate from 'react-paginate';

export default function MainPagination({ pageCount, onPress }) {
  const handlePageClick = (data) => {
    // رقم الصفحة الانت عاوزها
    console.log(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="prev"
      containerClassName={
        'pagination justify-content-center justify-content-lg-end p-3 '
      }
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
    />
  );
}
