function CardUpcomingExams() {
    return (


        <div className="row col-lg-12">
        <div className="col-3 ">
            <ul class="list-group text-center  pt-0">
                <h4 className="Upcoming-Exams-wed ">7TH</h4>
                <h5 className=" Upcoming-Exams-wed">JUN</h5>
                <li className="list-group-item active mb-4 "> <h4 className="Upcoming-Exams-wed">WED</h4></li>
            </ul>
        </div>
        <div className="col-9  Upcoming-Exams-introuduction-text clearfix ">
            <h4 >Introduction to React js  <i class="far fa-edit fs-5 Upcoming-Exams-introuduction-icon mt-1 float-end"></i></h4>
            <span className="Upcoming-Exams-instructor-text">Instructor  </span> <span className="Upcoming-Exams-instructor-subtext "> : Tariq Ali </span>

            <div className="row my-3">
                <h6 className="col-6 Upcoming-Exams-lev1Exam">LEV.1 Exam</h6>
                <div className="col-6  clearfix">
                <h6 className=' float-end Upcoming-Exams-lev1Exam '><i class="fa-regular fa-clock"></i>  12:30 PM</h6>
                </div>
            </div>
        </div>
    </div>






    );
}

export default CardUpcomingExams;