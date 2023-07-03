import CardRegisteredCourses from './CardRegisteredCourses';
import CardUpcomingExams from './CardUpcomingExams';

function RegisteredCoursesAndUpcomingExams() {
  return (
    <div className="clearfix mt-5  Registered-Upcoming">
      <div className="float-end  col-lg-5 col-12 ">
        <h3 className="Upcoming-Exams-title  mt-5 mb-4">Upcoming Exams</h3>
        <CardUpcomingExams />
        <br />
        <CardUpcomingExams />
      </div>
      <div className="float-start  col-lg-5 col-12 mt-5">
        <h3 className="Registered-Courses-title">Registered Courses </h3>
        <CardRegisteredCourses title="Tariq Ali" />
        <CardRegisteredCourses title="Sara Ahmed" />
      </div>
    </div>
  );
}

export default RegisteredCoursesAndUpcomingExams;
