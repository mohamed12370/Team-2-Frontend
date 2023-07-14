import React from 'react';
import './UserAllCoursesPage.css';
import NewCourse from '../../../Coponents/UserCourses/UserAllCourses/NewCourse';
import OtherCoursesHeader from '../../../Coponents/UserCourses/UserAllCourses/OtherCoursesHeader';
import OtherCourses from '../../../Coponents/UserCourses/UserAllCourses/OtherCourses';

export default function UserAllCoursesPage() {
  return (
    <>
      <div className="all-courses mb-5 pb-5">
        <div className="overlay"></div>
        <div className="container">
          <NewCourse />
          <OtherCoursesHeader />
        </div>
        <OtherCourses />
      </div>
    </>
  );
}
