import React from 'react';
import signuplogo from '../../Images/seff_logo_black.jpg';
import { Link } from 'react-router-dom';

export default function Singup() {
  return (
    <div className="Sign-Up-container">
      <div className="sign-up-parent-box">
        <img className=" sign-up-image" src={signuplogo} />
        <div className="sign-up-child-box row">
          <div className="col-lg-6 col-12 sign-up-first-name-box">
            <i class="fa-regular fa-user sign-up-first-name-icon"></i>
            <input
              className="  mb-3  sign-up-first-name"
              type="text"
              placeholder="FIRST NAME"
            />
          </div>
          <div className=" col-lg-6 col-12  sign-up-last-name-box">
            <i class="fa-regular fa-user sign-up-last-name-icon"></i>
            <input
              className="  mb-3  sign-up-last-name"
              type="text"
              placeholder="LAST NAME"
            />
          </div>
          <br />

          <div className="col-12  sign-up-email-box1">
            <i class="fa-regular fa-envelope  sign-up-email-icon"></i>
            <input
              className=" mb-3  sign-up-email "
              type="email"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <br />
          <div className="col-lg-6 col-12 sign-up-password-box">
            <i class="fa-solid fa-lock sign-up-password-icon "></i>
            <input
              className="  mb-3  sign-up-password"
              type="password"
              placeholder="PASSWORD"
            />
            <i class="fa-regular fa-eye sign-up-password-icon2"></i>
          </div>
          <div className="col-lg-6 col-12 sign-up-password-confirmation-box">
            <i class="fa-solid fa-lock sign-up-password-confirmation-icon"></i>
            <input
              className=" mb-3 sign-up-password-confirmation "
              type="password"
              placeholder="PASSWORD CONFIRMATION"
            />
            <i class="fa-regular fa-eye sign-up-password-confirmation-icon2"></i>
          </div>
          <br />

          <button className=" sign-up-button btn">SIGN UP</button>
        </div>
        <p className=" sign-up-already">
          {' '}
          Already have an account?{' '}
          <Link to={``} className="sign-up-login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
