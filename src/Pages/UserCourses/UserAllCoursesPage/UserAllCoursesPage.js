import React from 'react';
import './UserAllCoursesPage.css';
import PageHeader from '../../../Coponents/UserAllCoutses/PageHeader';
import NewCourse from '../../../Coponents/UserAllCoutses/NewCourse';
import OtherCoursesHeader from '../../../Coponents/UserAllCoutses/OtherCoursesHeader';
import OtherCourses from '../../../Coponents/UserAllCoutses/OtherCourses';

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
