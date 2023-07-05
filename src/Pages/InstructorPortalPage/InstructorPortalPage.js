import React from 'react';
import './style.css';
import InstructorPortal6th from '../../Coponents/InstructorPortal/InstructorPortal6th';
import WelcomeBackAndViewPortal from '../../Coponents/InstructorPortal/WelcomeBackAndViewPortal';
import NumberUpcomingAndOningAndCompleted from '../../Coponents/InstructorPortal/NumberBarUpcomingOngoingCompleted';
import AllClear1 from '../../Coponents/InstructorPortal/AllClear1';
import OngoingCoursesAndUpcomingExams from '../../Coponents/InstructorPortal/OngoingCoursesAndUpcoming Exams';
import UpcomingCourses from '../../Coponents/InstructorPortal/UpcomingCourses';

export default function InstructorPortalPage() {
  return (
    <>
      <div className="container11 ">
        <div className="overlayOnImage1"></div>
        <InstructorPortal6th />
        <WelcomeBackAndViewPortal />
        <NumberUpcomingAndOningAndCompleted />
        <AllClear1 />
      </div>

      <div className="background-color1">
        <div className=" container22">
          <OngoingCoursesAndUpcomingExams />
          <UpcomingCourses />
        </div>
      </div>
    </>
  );
}
