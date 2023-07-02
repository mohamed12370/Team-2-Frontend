import CardRegisteredCourses from './CardRegisteredCourses';
import CardUpcomingExams from './CardUpcomingExams';

function RegisteredCoursesAndUpcomingExams() {
  return (
    <div className="clearfix my-5  Registered-Upcoming">
      <div className="float-end  col-lg-5 col-12  my-5">
        <h3 className="titles-page">Upcoming Exams</h3>
        <CardUpcomingExams />
        <CardUpcomingExams />
      </div>

      <div className="float-start  col-lg-5 col-12 my-5">
        <h3 className="titles-page">Registered Courses </h3>
        <CardRegisteredCourses title="Tariq Ali" />
        <CardRegisteredCourses title="Sara Ahmed" />
      </div>
    </div>
  );
}

export default RegisteredCoursesAndUpcomingExams;
