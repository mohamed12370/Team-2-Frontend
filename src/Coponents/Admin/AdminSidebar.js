import React from 'react';

export default function AdminSidebar() {
  return (
    <div className="Side">
      <div className="SideDiv">
        <h3 className="SideHeader">
          <a href="#/">Users</a>
        </h3>
        <ul>
          <li>
            <a href="#/">Admins</a>
          </li>
          <li>
            <a href="#/">Editors</a>
          </li>
          <li>
            <a href="#/">Instructors</a>
          </li>
          <li>
            <a href="#/">Students</a>
          </li>
        </ul>
      </div>
      <div className="SideDiv">
        <h3 className="SideHeader">
          <a href="#/">Articles</a>
        </h3>
        <ul>
          <li>
            <a href="#/">Published Articles</a>
          </li>
          <li>
            <a href="#/">Scheduled Articles</a>
          </li>
          <li>
            <a href="#/">Saved Drafts</a>
          </li>
        </ul>
      </div>
      <div className="SideDiv">
        <h3 className="SideHeader">
          <a href="#/">Jobs</a>
        </h3>
        <ul>
          <li>
            <a href="#/">Published Jobs</a>
          </li>
          <li>
            <a href="#/">Save Drafts</a>
          </li>
        </ul>
      </div>
      <div className="SideDiv">
        <h3 className="SideHeader">
          <a href="#/">Courses</a>
        </h3>
        <ul>
          <li>
            <a href="#/">Published Courses</a>
          </li>
          <li>
            <a href="#/">Scheduled Courses</a>
          </li>
          <li>
            <a href="#/">Saved Drafts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
