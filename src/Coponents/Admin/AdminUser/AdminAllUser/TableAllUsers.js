import React, { useState } from 'react';
import TableUserCard from './TableUserCard';
// import DataTable from "react-data-table-component";

const TableAllUsers = () => {
  const list = [
    {
      id: 1,
      name: 'username',
      status: 'Active',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 2,
      name: 'username',
      status: 'Active',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 3,
      name: 'username',
      status: 'inactive',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 4,
      name: 'username',
      status: 'inactive',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 5,
      name: 'username',
      status: 'inactive',
      userId: 'FE-2303',
      role: 'Admin',
      email: 'user@gmail.com',
    },
    {
      id: 6,
      name: 'username',
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
        <div className="box col-3 col-lg-2">Name</div>
        <div className=" box col col-lg-2 d-flex justify-content-center">
          Status
        </div>
        <div className=" box col col-lg-2 d-flex justify-content-center">
          User ID
        </div>
        <div className=" box col col-lg-2 d-flex justify-content-center">
          Role
        </div>
        <div className=" box col col-lg-2 d-flex justify-content-center">
          Email
        </div>
        <div className=" box col col-lg-2 d-flex justify-content-center"></div>
      </div>

      <div>
        {lists.map((current, i) => (
          <TableUserCard key={i} item={current} />
        ))}
      </div>
    </div>
  );
};

export default TableAllUsers;
