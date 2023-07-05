// import './style.css'
import CardUpcomingCourses from './CardUpcomingCourses';

function UpcomingCourses() {
  return (
    <div>
      {/* <div >
<h3 className=' Upcoming-Courses-title  mt-5 mb-4'>Upcoming Courses</h3>
        </div> */}
      <div class="row py-5">
        <h3 className=" Upcoming-Courses-title mb-4 ">Upcoming Courses</h3>
        <CardUpcomingCourses
          title="Python for Beginners "
          subtitle1="Wednesday, june 7th"
          subtitle2="12 lessons"
        />
        <CardUpcomingCourses
          title="Python for Beginners "
          subtitle1="Wednesday, june 7th"
          subtitle2="12 lessons"
        />
      </div>
    </div>
  );
}

export default UpcomingCourses;
