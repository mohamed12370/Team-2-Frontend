import React, { useState } from 'react';
import './AdminCreateCoursesPage.css';
import Header from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Header';
import Side from '../../../../Coponents/Admin/AdminUser/AdminAllUser/Side';
import CreateCourseForms from '../../../../Coponents/Admin/AdminCourses/AdminCreateCourses/CreateCourseForms';
import SaveButtons from '../../../../Coponents/Admin/AdminCourses/AdminCreateCourses/SaveButtons';
import AddAndDeleteBtn from '../../../../Coponents/Admin/AdminCourses/AdminCreateCourses/AddAndDeletelesson';

export default function AdminCreateCoursesPage() {
  // props عن طريق ال component انت عاوز لاى function هندسة ممكن تبعت اى

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
  const [courseName, setcourseName] = useState('');
  const [level, setLevel] = useState('');
  const [noOfLessons, setnoOfLessons] = useState('');
  const [language, setLanguage] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuraiton] = useState('');
  const [certificate, setcertificate] = useState('');
  const [courseIntroduction, setcourseIntroduction] = useState('');
  const [courseAssignment, setcourseAssignment] = useState('');
  const [courseRequirement, setcourseRequirement] = useState('');
  const [courseMaterials, setcourseMaterials] = useState('');
  const [puplishingDate, setpuplishingDate] = useState('');
  const [uploadCoverPhoto, setuploadCoverPhoto] = useState();
  // //Inputs States setting functions
  const handlecourseName = (e) => {
    setcourseName(e.target.value);
  };
  const handlelevel = (e) => {
    setLevel(e.target.value);
  };
  const handlenoOfLessons = (e) => {
    setnoOfLessons(e.target.value);
  };
  const handlelanguage = (e) => {
    setLanguage(e.target.value);
  };
  const handlestartDate = (e) => {
    console.log(setStartDate(e.target.value));
  };
  const handleduration = (e) => {
    setDuraiton(e.target.value);
  };
  const handlecertificate = (e) => {
    setcertificate(e.target.value);
  };
  const handlecourseIntroduction = (e) => {
    setcourseIntroduction(e.target.value);
  };
  const handlecourseAssignment = (e) => {
    setcourseAssignment(e.target.value);
  };
  const handlecourseRequirement = (e) => {
    setcourseRequirement(e.target.value);
  };
  const handlecourseMaterials = (e) => {
    setcourseMaterials(e.target.value);
  };
  const handlepuplishingDate = (e) => {
    setpuplishingDate(e.target.value);
  };
  const handleuploadCoverPhoto = (e) => {
    setuploadCoverPhoto(e.target.files[0]);
  };

  return (
    <div>
      <div className="overlay"></div>
      <div>
        <Header title={'Create New Course'} date={'6th june 2023'} />
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <Side activeTitle={'courses'} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="row">
              <div className="course text-capitalize col-12 col-lg-12">
                <CreateCourseForms />
                <div className="mt-4 row position-relative  Lessons">
                  <div className="col-7 col-lg-12 ">
                    <h6 className="title-lesson mt-2">Lessons</h6>
                  </div>
                  <AddAndDeleteBtn />
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
