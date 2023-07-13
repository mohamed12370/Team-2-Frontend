import React, { useState } from 'react';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import UpdateCoursesForms from '../../../../Coponents/Admin/AdminCourses/AdminUpdateCouses/UpdateCoursesForms';
import SaveButtons from '../../../../Coponents/Admin/AdminCourses/AdminCreateCourses/SaveButtons';
import AddAndDeleteBtnUpdateCourse from '../../../../Coponents/Admin/AdminCourses/AdminUpdateCouses/AddAndDeleteBtnUpdateCourse';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function AdminUpdateCoursesPage() {
  // props عن طريق ال component انت عاوز لاى function هندسة ممكن تبعت اى

  const { id } = useParams();
  const dispatch = useDispatch();
  const { adminCoursesReducer } = useSelector((state) => state);
  const { adminAllCourse } = adminCoursesReducer;
  const currentCourse = adminAllCourse?.filter((course) => course.id === id);

  const [inputType, setInputType] = useState('text');

  const handleFocus = () => {
    setInputType('date');
  };
  const handleFocusT = () => {
    setInputType('time');
  };

  const handleBlur = () => {
    setInputType('text');
  };

  //Input States
  const [ucourseName, setucourseName] = useState(currentCourse?.name);
  const [ulevel, setuLevel] = useState(currentCourse?.level);
  const [unoOfLessons, setunoOfLessons] = useState(currentCourse?.noOfLessons);
  const [ulanguage, setuLanguage] = useState(currentCourse?.language);
  const [ustartDate, setuStartDate] = useState(currentCourse?.startDate);
  const [uduration, setuDuraiton] = useState(currentCourse?.duration);
  const [ucertificate, setucertificate] = useState(currentCourse?.certificate);
  const [ucourseIntroduction, setucourseIntroduction] = useState(
    currentCourse?.courseIntroduction
  );
  const [ucourseAssignment, setucourseAssignment] = useState(
    currentCourse?.courseAssignment
  );
  const [ucourseRequirement, setucourseRequirement] = useState(
    currentCourse?.courseRequirement
  );
  const [ucourseMaterials, setucourseMaterials] = useState(
    currentCourse?.courseMaterials
  );
  const [upuplishingDate, setupuplishingDate] = useState(
    currentCourse?.puplishingDate
  );
  const [uuploadCoverPhoto, setuuploadCoverPhoto] = useState(
    currentCourse?.uploadCoverPhoto
  );
  // //Inputs States setting functions
  const handleucourseName = (e) => {
    setucourseName(e.target.value);
  };
  const handleulevel = (e) => {
    setuLevel(e.target.value);
  };
  const handleunoOfLessons = (e) => {
    setunoOfLessons(e.target.value);
  };
  const handleulanguage = (e) => {
    setuLanguage(e.target.value);
  };
  const handleustartDate = (e) => {
    console.log(setuStartDate(e.target.value));
  };
  const handleuduration = (e) => {
    setuDuraiton(e.target.value);
  };
  const handleucertificate = (e) => {
    setucertificate(e.target.value);
  };
  const handleucourseIntroduction = (e) => {
    setucourseIntroduction(e.target.value);
  };
  const handleucourseAssignment = (e) => {
    setucourseAssignment(e.target.value);
  };
  const handleucourseRequirement = (e) => {
    setucourseRequirement(e.target.value);
  };
  const handleucourseMaterials = (e) => {
    setucourseMaterials(e.target.value);
  };
  const handleupuplishingDate = (e) => {
    setupuplishingDate(e.target.value);
  };
  const handleuuploadCoverPhoto = (e) => {
    setuuploadCoverPhoto(e.target.files[0]);
  };

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
