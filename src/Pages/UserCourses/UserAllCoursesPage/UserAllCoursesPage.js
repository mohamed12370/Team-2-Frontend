import React from 'react';
import './UserAllCoursesPage.css';
import PageHeader from '../../../Coponents/UserAllCourses/PageHeader';
import NewCourse from '../../../Coponents/UserAllCourses/NewCourse';
import OtherCoursesHeader from '../../../Coponents/UserAllCourses/OtherCoursesHeader';
import OtherCourses from '../../../Coponents/UserAllCourses/OtherCourses';

export default function UserAllCoursesPage() {
  return (
    <>
      <div className="all-courses">
        <div className="userCourses-overlay">
          <div className="container">
            <PageHeader />
            <NewCourse />
            <OtherCoursesHeader />
          </div>
          <OtherCourses />
        </div>
      </div>
    </>
  );
}
