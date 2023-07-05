import React from 'react';
import { Link } from 'react-router-dom';
const Side = ({ activeTitle }) => {
  return (
    <div className="Side">
      <div className="SideDiv">
        <h5
          className={activeTitle === 'users' ? 'SideHeader ff' : 'SideHeader'}
        >
          <Link to={`/adminalluser`}>Users</Link>
        </h5>
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
        <h5
          className={
            activeTitle === 'articles' ? 'SideHeader ff' : 'SideHeader'
          }
        >
          <Link to={`/adminallarticle`}>Articles</Link>
        </h5>
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
        <h5 className={activeTitle === 'jobs' ? 'SideHeader ff' : 'SideHeader'}>
          <Link to={`/adminalljob`}>Jobs</Link>
        </h5>
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
        <h5
          className={activeTitle === 'courses' ? 'SideHeader ff' : 'SideHeader'}
        >
          <Link to={`/adminallcourses`}>Courses</Link>
        </h5>
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
};

export default Side;
