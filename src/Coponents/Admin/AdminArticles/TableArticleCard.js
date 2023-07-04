import React from 'react';

export default function TableArticleCard({ item }) {
  return (
    <div className="row table-container">
      <div className="d-lg-none col-6 name">Title</div>
      <div className=" col-lg-2 col-12 upper name-text">{item?.title}</div>
      <div className="col-lg-3 col-6 text-center status">
        {item?.status === 'puplish' ? (
          <button className="active">{item?.status}</button>
        ) : (
          <button className="notActive">{item?.status}</button>
        )}
      </div>
      <div className="d-lg-none col-6 user">Category</div>
      <div className="col-lg-2 col-6 text-center email">{item?.category}</div>
      <div className="d-lg-none col-6 role">Date&Time</div>
      <div className="col-lg-3 col-6 text-center user-id">{item?.dateTime}</div>
      <div className="col-lg-2 col-12 d-flex justify-content-end email-name">
        <i class="far fa-edit edit"></i>
        <i class="far fa-trash-alt delete ms-2"></i>
      </div>
    </div>
  );
}
