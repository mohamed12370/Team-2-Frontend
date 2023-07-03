import './style.css';
import AllClear from '../../Coponents/StudentPortal/AllClear';
import EarnedCertificates from '../../Coponents/StudentPortal/EarnedCertificates';
import HereIsHowYou from '../../Coponents/StudentPortal/HereIsHowYou';
import LevelAndProgressBar from '../../Coponents/StudentPortal/LevelAndProgressBar';
import StudentPortalNumberUpcomingAndRegisteredAndCompleted from '../../Coponents/StudentPortal/NumberBarUpcomingAndRegisteredAndCompleted';
import RegisteredCoursesAndUpcomingExams from '../../Coponents/StudentPortal/RegisteredCoursesAndUpcomingExams';
import StudentPortal6th from '../../Coponents/StudentPortal/StudentPorta16th';
import StudentPortalTitleAndView from '../../Coponents/StudentPortal/StudentPortalTitleAndView';

function StudentPortalPage() {
  return (
    <>
      <div className="container1 ">
        <div className="overlayOnImage"></div>
        <StudentPortal6th />
        <StudentPortalTitleAndView />
        <StudentPortalNumberUpcomingAndRegisteredAndCompleted />
        <LevelAndProgressBar />
        <AllClear />
      </div>
      <div className="background-color">
        <div className=" container2">
          <RegisteredCoursesAndUpcomingExams />
          <HereIsHowYou />
          <EarnedCertificates />
        </div>
      </div>
    </>
  );
}

export default StudentPortalPage;
