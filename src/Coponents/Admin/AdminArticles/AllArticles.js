import React from 'react';
import { VscTrash } from 'react-icons/vsc';
import { BiEdit } from 'react-icons/bi';
import dummyArticles from './DummyArticles';

const AllArticles = () => {
  return (
    <div>
      <table borderless className="articles-table  g">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date & Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dummyArticles.map((article) => {
            return (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.category}</td>
                <td className="status">
                  <span
                    className={
                      article.status === 'Puplished'
                        ? 'status-style-puplished'
                        : 'status-style-draft'
                    }
                  >
                    {article.status}
                  </span>
                </td>
                <td>{article.dateAndTime}</td>
                <td>
                  <span className="fn-button">
                    <BiEdit />
                  </span>{' '}
                  <span className="fn-button">
                    <VscTrash />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllArticles;
