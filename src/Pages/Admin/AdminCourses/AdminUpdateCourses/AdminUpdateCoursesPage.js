import React from 'react';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import UpdateCoursesForms from '../../../../Coponents/Admin/AdminCourses/AdminUpdateCouses/UpdateCoursesForms';
import SaveButtons from '../../../../Coponents/Admin/AdminCourses/AdminCreateCourses/SaveButtons';
import AddAndDeleteBtnUpdateCourse from '../../../../Coponents/Admin/AdminCourses/AdminUpdateCouses/AddAndDeleteBtnUpdateCourse';

export default function AdminUpdateCoursesPage() {
  return (
    <div>
      <div className="overlay"></div>
      <div>
        <Header title={'Update New Course'} date={'6th june 2023'} />
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <Side activeTitle={'courses'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="row">
              <div className="course text-capitalize col-12 col-lg-12">
                <UpdateCoursesForms />
                <div className="mt-4 row position-relative  Lessons">
                  <div className="col-7 col-lg-12 ">
                    <h6 className="title-lesson mt-2">Lessons</h6>
                  </div>
                  <AddAndDeleteBtnUpdateCourse />
                </div>
                <SaveButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
