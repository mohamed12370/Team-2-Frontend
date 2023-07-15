import React from 'react';
import CoursesArrayData from './CoursesArrayData';
import img from '../../../Images/Python.svg.png';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import PageHeader from './PageHeader';
import LoginModal from '../../Auth/LoginModal';
import { Button, Modal } from 'react-bootstrap';

const NewCourse = () => {
  const [slider, setSlider] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  // carsoul settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleUserToken = (id) => {
    const token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
      navigate(`/usercoursesdetails/${id}`);
    } else {
      handleShow();
    }
  };

  return (
    <>
      <PageHeader next={next} pre={previous} />
      <div className="row  mt-1 parent-card">
        <Slider ref={setSlider} {...settings}>
          {CoursesArrayData.map((course, i) => {
            return (
              <div
                key={i}
                className="card p-2 col-md-6 col-lg-3 bg-transparent text-light"
                style={{ backgroundColor: 'transparent' }}
              >
                <div className="userCourses-parent">
                  <div className="userCourses-parentImg position-relative">
                    <img className="" src={img} alt="Card-cap" height={200} />
                    <div className="userCourses-parentImgContent position-absolute bottom-0 left-0 start-0 p-2">
                      <h5 className="text-white fw-bold">{course.title}</h5>
                      <span style={{ color: '#bf9b30' }}>instructor:</span>
                      <span className="text-white ms-1">
                        {course.instructor}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <i className="fa-regular fa-calendar-days card-icon"></i>
                    <span className="card-title ms-2">{course.date}</span>
                    <div className="mt-1 ">
                      <i className="fa-solid fa-clipboard card-icon"></i>
                      <span className="card-title ms-2">
                        {course.noOfLessons}
                      </span>
                    </div>
                    <a href="#/" className="btn mt-4">
                      ENROLL
                    </a>
                    <div
                      className="mt-2"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleUserToken(course.id)}
                    >
                      <span className="text-light">View Details </span>
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <>
        <Modal
          show={showLogin}
          onHide={handleClose}
          style={{ backgroundColor: 'rgb(100,100,100,.9)' }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>you are not login plz go to login</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              <Link to={`/login`}>Login</Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default NewCourse;
