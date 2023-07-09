import { Link } from 'react-router-dom';
import CardOngoingCourses from './CardOngoingCourses';
import CardUpcomingExams from './CardUpcomingExam';

function OngoingCoursesAndUpcomingExams() {
  return (
    <div className="row mt-5 ongoing-Upcoming">
      <div className=" col-lg-6 col-12 ">
        <h3 className="ongoing-Courses-title">Ongoing Courses </h3>
        <CardOngoingCourses title="Introduction to React js" />
        <CardOngoingCourses title="Introduction to Data Analysis" />
      </div>
      <div className=" col-lg-6 col-12  ">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className=" Upcoming-Exams-title">Upcoming Exams</p>
          <Link to={`/createexam`} className="btn Upcoming-Exams-button ">
            {' '}
            CREATE NEW Exam{' '}
          </Link>
        </div>
        <CardUpcomingExams />
      </div>
    </div>
  );
}

export default OngoingCoursesAndUpcomingExams;
