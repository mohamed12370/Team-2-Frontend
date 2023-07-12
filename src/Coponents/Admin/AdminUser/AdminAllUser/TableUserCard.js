import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TableUserCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="row table-container">
      <div className="d-lg-none col-6 name">Name</div>
      <div className=" col-lg-2 col-12 upper  name-text">{item?.name}</div>
      <div className="col-lg-2 col-6  status">
        {item?.status === 'Active' ? (
          <button className="user-active">{item?.status}</button>
        ) : (
          <button className="notActive">{item?.status}</button>
        )}
      </div>
      <div className="d-lg-none col-6  user">User ID</div>
      <div className="col-lg-2 col-6 text-center user-id ">{item?.userId}</div>
      <div className="d-lg-none col-6  role">Role</div>
      <div className="col-lg-2 col-6 text-center role-text">{item?.role}</div>
      <div className="d-lg-none col-12  email">Email</div>
      <div className="col-lg-2 col-6  email-name ">{item?.email}</div>
      <div
        className="col-lg-2 col-6  icon d-flex justify-content-end align-items-center position-relative start-0 top-0"
        style={{ transform: 'scale(1)' }}
      >
        <i
          className="far fa-edit edit "
          onClick={() => navigate(`/adminedituser/id`)}
        ></i>

        <i className="far fa-trash-alt delete ms-3"></i>
      </div>
    </div>
  );
}
