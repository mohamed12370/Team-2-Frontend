import React from 'react';
import './ShowCourseDetailsPage.css';
import CourseContent from '../../../Coponents/UserCourses/UserCourseDetails/CourseContent';
import CourseInfo from '../../../Coponents/UserCourses/UserCourseDetails/CourseInfo';
import CourseInteraction from '../../../Coponents/UserCourses/UserCourseDetails/CourseInteraction';
import CourseTitle from '../../../Coponents/UserCourses/UserCourseDetails/CourseTitle';

export default function ShowCourseDetailsPage() {
  return (
    <>
      <div className="tech">
        <div className="tech-overlay">
          <div className="container">
            <CourseTitle />
            <div className="row mt-5 orde p-0 m-0 ">
              <CourseInfo />
            </div>

            <div className="row  orde p-0 m-0 pb-5">
              <CourseContent />
              <CourseInteraction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
