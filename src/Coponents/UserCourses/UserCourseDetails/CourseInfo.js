import React from 'react';
import { BiBarChartAlt2, BiUser } from 'react-icons/bi';
import { TbNotes } from 'react-icons/tb';
import { PiCertificateBold } from 'react-icons/pi';
import { RiCalendar2Line } from 'react-icons/ri';
import { MdVoiceChat } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
import img from '../../../Images/Python.svg.png';

const CourseInfo = () => {
  return (
    <>
      <div className="col-lg-8 col-12 text-white tech-img text-start">
        <img src={img} alt="" width={300} />
      </div>

      <div className="col-lg-4 col-12 details course-info">
        <div className="d-flex ">
          <div className="d-flex p-2 div-lesson">
            <TbNotes className="icon-lesson" />
            <div className="ms-3 infoo">
              <p className="mb-0">Lesson</p>
              <p>12</p>
            </div>
          </div>
          <div className="ms-4 d-flex  p-2 div-lesson">
            <BiBarChartAlt2 className="icon-lesson" />
            <div className="ms-3 infoo">
              <p className="mb-0">Level</p>
              <p>Beginner</p>
            </div>
          </div>
        </div>
        <div className="mt-3 p-2 btn-lesson">
          <div>
            <BiUser className="me-2" />
            <span className="span1">Student : &nbsp; </span>
            <span className="span2">20</span>
          </div>
          <div className="mt-2 ">
            <MdVoiceChat className="me-2" />
            <span className="span1">Languge : &nbsp; </span>
            <span className="span2">Arabic</span>
          </div>
          <div className="mt-2 ">
            <BsClock className="me-2" />
            <span className="span1">Duration : &nbsp; </span>
            <span className="span2">13hours</span>
          </div>
          <div className="mt-2">
            <RiCalendar2Line className="me-2" />
            <span className="span1">Start Data : &nbsp; </span>
            <span className="span2">Wedensday, june 7th</span>
          </div>
          <div className="mt-2">
            <PiCertificateBold className="me-2" />
            <span className="span1">Certificate : &nbsp; </span>
            <span className="span2">Upon Completion</span>
          </div>
          <button className="btn w-100 mt-3 text-white">ENROLL</button>
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
