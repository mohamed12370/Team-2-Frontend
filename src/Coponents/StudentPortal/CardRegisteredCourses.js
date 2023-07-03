function CardRegisteredCourses({ title = '' }) {
  return (
    <div className="row col-lg-12 Registered-Courses-introuduction-text  my-4 py-2">
      <h4>Introduction to React js </h4>
      <span>
        {' '}
        <span className="Registered-Courses-instructor-text">
          Instructor{' '}
        </span>{' '}
        <span className=" Registered-Courses-instructor-subtext ">
          {' '}
          : {title}{' '}
        </span>
      </span>
      <br /> <br />
      <div className="row ">
        <h3 className="col-6 Registered-Courses-lev1 ">LEV.1</h3>
        <div className="col-6  clearfix">
          <button
            className="view-profile float-end btn mb-4 Registered-Courses-button"
            type="button"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRegisteredCourses;
