import '../../Pages/StudentePortalPage/style.css';

import CardNumberUpcomingAndRegisteredAndCompleted from './CardNumberUpcomingAndRegisteredAndCompleted';
function StudentPortalNumberUpcomingAndRegisteredAndCompleted() {
  return (
    <div className="my-5 row Number-Upcoming-Registered-Completed ">
      <CardNumberUpcomingAndRegisteredAndCompleted
        number="1"
        title1="UPCOMING"
        title2="EXAMS"
      />
      <CardNumberUpcomingAndRegisteredAndCompleted
        number="4"
        title1="REGISTERED"
        title2="COURSES"
      />
      <CardNumberUpcomingAndRegisteredAndCompleted
        number="2"
        title1="COMPLETED"
        title2="COURSES"
      />
    </div>
  );
}

export default StudentPortalNumberUpcomingAndRegisteredAndCompleted;
