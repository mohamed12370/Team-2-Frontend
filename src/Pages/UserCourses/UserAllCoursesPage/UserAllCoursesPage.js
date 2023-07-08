import React from 'react';
import './UserAllCoursesPage.css';
import PageHeader from '../../../Coponents/UserCourses/UserAllCourses/PageHeader';
import NewCourse from '../../../Coponents/UserCourses/UserAllCourses/NewCourse';
import OtherCoursesHeader from '../../../Coponents/UserCourses/UserAllCourses/OtherCoursesHeader';
import OtherCourses from '../../../Coponents/UserCourses/UserAllCourses/OtherCourses';

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
