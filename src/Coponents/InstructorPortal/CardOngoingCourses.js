function CardOngoingCourses(props) {
  return (
    <div class="row col-lg-12 ongoing-Courses-introuduction-text my-4 ">
      <h4>{props.title} </h4>
      <br /> <br />
      <div class=" d-flex justify-content-between align-items-center">
        <div class=" d-flex justify-content-between align-items-center  clearfix">
          <h6 class=" ongoing-Courses-lev1 mt-2">LEV.1</h6>
        </div>
        <div className="float-end">
          <i class="far fa-user  fs-5 ongoing-Courses-icon"></i>
          <span class=" pe-4 ongoing-Courses-20student "> 20 students</span>
          <button type="button" class="btn  ongoing-Courses-button ">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardOngoingCourses;
