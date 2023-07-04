import React, { useState } from 'react';
// import DataTable from "react-data-table-component";

const Table = () => {
  const list = [
    {
      id: 1,
      name: "Here's the username",
      status: 'Active',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 2,
      name: "Here's the username",
      status: 'Active',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 3,
      name: "Here's the username",
      status: 'inactive',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 4,
      name: "Here's the username",
      status: 'inactive',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 5,
      name: "Here's the username",
      status: 'inactive',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 6,
      name: "Here's the username",
      status: 'inactive',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
  ];

  const [lists, setList] = useState(list);

  return (
    <div className="crud">
      <div className="row table-container first">
        <div className="box col-4">Name</div>
        <div className=" box col">Status</div>
        <div className=" box col">User ID</div>
        <div className=" box col">Role</div>
        <div className=" box col">Email</div>
        <div className=" box col"></div>
      </div>

      <div>
        {lists.map((current) => (
          <div className="row table-container">
            <div className="d-lg-none col-6 name">Name</div>
            <div className=" col-lg-4 col-12 upper  name-text">
              {current.name}
            </div>
            <div className="col-lg-2 col-6  status">
              {current.status === 'Active' ? (
                <button className="active">{current.status}</button>
              ) : (
                <button className="notActive">{current.status}</button>
              )}
            </div>
            <div className="d-lg-none col-6  user">User ID</div>
            <div className="col-lg-1 col-6  user-id ">{current.userId}</div>
            <div className="d-lg-none col-6  role">Role</div>
            <div className="col-lg-1 col-6  role-text">{current.role}</div>
            <div className="d-lg-none col-12  email">Email</div>
            <div className="col-lg-2 col-6  email-name">{current.email}</div>
            <div className="col-lg-2 col-6  icon">
              <i class="far fa-edit edit"></i>
              <i class="far fa-trash-alt delete"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
