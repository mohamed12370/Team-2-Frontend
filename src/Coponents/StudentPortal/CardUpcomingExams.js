function CardUpcomingExams() {
  return (
    <div className="row col-lg-12  my-5  mr-3">
      <div className="col-3  text-light">
        <ul class="list-group text-center  pt-0">
          <h4 className=" ">7TH</h4>
          <h5 className=" ">JUN</h5>
          <li className="list-group-item active mb-4">
            {' '}
            <h4>WED</h4>
          </li>
        </ul>
      </div>
      <div className="col-9 introuduction-text ml-5">
        <h4>Introduction to React js </h4>
        <span className="instructor-text">Instructor </span>{' '}
        <span className="instructor-subtext "> : Tariq Ali </span>
        <div className="row my-3">
          <h6 className="col-6 lev1Exam">LEV.1 Exam</h6>
          <div className="col-6  clearfix">
            <h6 className="view-profile float-end lev1Exam ">
              <i class="fa-regular fa-clock"></i> 12:30 PM
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUpcomingExams;
