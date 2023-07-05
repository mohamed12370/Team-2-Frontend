import CardOngoingCourses from './CardOngoingCourses';
import CardUpcomingExams from './CardUpcomingExam';
function OngoingCoursesAndUpcomingExams() {
    return (


        <div className='clearfix mt-5  ongoing-Upcoming'>

            <div className='float-end  col-lg-5 col-12  '>
                <div className='clearfix'>
                    <h3 className='float-start Upcoming-Exams-title  mt-5 mb-4'>Upcoming Exams</h3>
                    <button className='btn float-end Upcoming-Exams-button mt-5'> CREATE NEW </button>
                </div>
                <CardUpcomingExams />
                <br />
                <CardUpcomingExams />
            </div>
            <div className='float-start  col-lg-5 col-12 mt-5'>
                <h3 className='ongoing-Courses-title'>Ongoing Courses </h3>
                <CardOngoingCourses title='Introduction to React js' />
                <CardOngoingCourses title='Introduction to Data Analysis' />
            </div>
        </div>

    );
}

export default OngoingCoursesAndUpcomingExams;