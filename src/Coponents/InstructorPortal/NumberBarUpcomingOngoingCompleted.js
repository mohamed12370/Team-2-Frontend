// import './style.css'
import CardNumberUpcomingAndOningAndCompleted from './CardNumberBarUpcomingOngoingCompleted';

function NumberUpcomingAndOningAndCompleted() {
  return (
    <div className="my-5 row Number-Upcoming-Registered-Completed ">
      <CardNumberUpcomingAndOningAndCompleted
        number="1"
        title1="UPCOMING"
        title2="EXAMS"
      />
      <CardNumberUpcomingAndOningAndCompleted
        number="4"
        title1="REGISTERED"
        title2="COURSES"
      />
      <CardNumberUpcomingAndOningAndCompleted
        number="2"
        title1="COMPLETED"
        title2="COURSES"
      />
    </div>
  );
}

export default NumberUpcomingAndOningAndCompleted;
