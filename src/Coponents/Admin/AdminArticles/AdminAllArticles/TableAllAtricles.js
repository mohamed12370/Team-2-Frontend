import React, { useState } from 'react';
import TableArticleCard from './TableArticleCard';

export default function TableAllAtricles() {
  const list = [
    {
      id: 1,
      title: 'atricleTitle',
      status: 'puplish',
      category: 'HTML',
      dateTime: 'Monday, Jun 5th 12:30 PM',
    },
    {
      id: 2,
      title: 'atricleTitle',
      status: 'puplish',
      category: 'HTML',
      dateTime: 'Monday, Jun 5th 12:30 PM',
    },
  ];

  const [lists, setList] = useState(list);

  return (
    <div className="crud">
      <div className="row table-container first">
        <div className="box col-3 col-lg-2">Title</div>
        <div className=" box col col-lg-3 d-flex justify-content-center">
          status
        </div>
        <div className=" box col col-lg-2 d-flex justify-content-center">
          Category
        </div>
        <div className=" box col col-lg-3 d-flex justify-content-center">
          Date & Time
        </div>
        <div className=" box col col-lg-2 d-flex justify-content-center"></div>
      </div>

      <div>
        {lists.map((current, i) => (
          <TableArticleCard key={i} item={current} />
        ))}
      </div>
    </div>
  );
}
