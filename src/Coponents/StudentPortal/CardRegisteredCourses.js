function CardRegisteredCourses(props) {
  return (
    <div class="row col-lg-12 introuduction-text Registered-Courses my-5 py-3">
      <h4>Introduction to React js </h4>
      <span>
        {' '}
        <span className="instructor-text">Instructor </span>{' '}
        <span className=" instructor-subtext "> : {props.title} </span>
      </span>
      <br /> <br />
      <div className="row lev1-view">
        <h3 className="col-6 ">LEV.1</h3>
        <div className="col-6  clearfix">
          <button className="view-profile float-end btn mb-4 " type="button">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRegisteredCourses;
