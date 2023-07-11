import React from 'react';

const SideBar = () => {
  return (
    <div className="sideBar">
      <ul className="list">
        <h2>Users</h2>
        <div className="li-items">
          <li>Admins</li>
          <li>Editors</li>
          <li>Instructors</li>
          <li>Students</li>
        </div>
      </ul>
      <ul className="list">
        <h2>Articles</h2>
        <div className="li-items">
          <li>Puplished Articles</li>
          <li>Scheduled Articles</li>

          <li>Saved Drafts</li>
        </div>
      </ul>
      <ul className="list">
        <h2>Jobs</h2>
        <div className="li-items">
          <li>Published Jobs</li>
          <li>Saved Drafts</li>
        </div>
      </ul>
      <ul className="list">
        <h2>Courses</h2>
        <div className="li-items">
          <li>Published Courses</li>
          <li>Scheduled Courses</li>
          <li>Saved Drafts</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
