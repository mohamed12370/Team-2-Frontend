import React from 'react';
import CoursesArrayData from './CoursesArrayData';
import img from '../../../Images/Python.svg.png';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import PageHeader from './PageHeader';

const NewCourse = () => {
  const [slider, setSlider] = useState(null);
  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };

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

  const navigate = useNavigate();

  return (
    <>
      <PageHeader next={next} pre={previous} />
      <div className="row  mt-1 parent-card">
        <Slider ref={setSlider} {...settings}>
          {CoursesArrayData.map((course) => {
            return (
              <div key={course.id} className="card p-2 col-md-6 col-lg-3">
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
                      onClick={() => navigate(`/usercoursesdetails/:id`)}
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
    </>
  );
};

export default NewCourse;
