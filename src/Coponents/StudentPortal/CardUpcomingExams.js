function CardUpcomingExams() {
  return (
    <div className="row col-lg-12 mr-3 mt-2">
      <div className="col-3  text-light">
        <ul className="list-group text-center  pt-0">
          <h4 className="Upcoming-Exams-wed ">7TH</h4>
          <h5 className=" Upcoming-Exams-wed">JUN</h5>
          <li className="list-group-item active mb-4 ">
            {' '}
            <h4 className="Upcoming-Exams-wed">WED</h4>
          </li>
        </ul>
      </div>
      <div className="col-9 Upcoming-Exams-introuduction-text ml-5">
        <h4>Introduction to React js </h4>
        <span className="Upcoming-Exams-instructor-text">Instructor </span>{' '}
        <span className="Upcoming-Exams-instructor-subtext ">
          {' '}
          : Tariq Ali{' '}
        </span>
        <div className="row my-3">
          <h6 className="col-6 Upcoming-Exams-lev1Exam">LEV.1 Exam</h6>
          <div className="col-6  clearfix">
            <h6 className=" float-end Upcoming-Exams-lev1Exam ">
              <i className="fa-regular fa-clock"></i> 12:30 PM
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUpcomingExams;
