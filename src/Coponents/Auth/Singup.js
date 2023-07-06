import React from 'react';
import signuplogo from '../../Images/seff_logo_black.jpg';

export default function Singup() {
  return (
    <div className="Sign-Up-container">
      <div className="sign-up-parent-box">
        <img className=" sign-up-image" src={signuplogo} />
        <div className="sign-up-child-box row">
          <i class="fa-regular fa-user sign-up-first-name-icon"></i>
          <input
            className="col-lg-6 col-12  mb-3  pr-2 sign-up-first-name"
            type="text"
            placeholder=" FIRST NAME"
          />
          <i class="fa-regular fa-user sign-up-last-name-icon"></i>
          <input
            className=" col-lg-6 col-12 mb-3  sign-up-last-name"
            type="text"
            placeholder=" LAST NAME"
          />
          <br />

          <i class="fa-regular fa-envelope  sign-up-email-icon"></i>
          <input
            className="col-12 mb-3  sign-up-email "
            type="email"
            placeholder="EMAIL ADDRESS"
          />
          <br />

          <i class="fa-solid fa-lock sign-up-password-icon"></i>
          <input
            className="col-lg-6 col-12 ml-1 mb-3  sign-up-password"
            type="password"
            placeholder="PASSWORD"
          />
          <i class="fa-regular fa-eye sign-up-password-icon2"></i>
          <i class="fa-solid fa-lock sign-up-password-confirmation-icon"></i>
          <input
            className="col-lg-6 col-12 mb-3 sign-up-password-confirmation "
            type="password"
            placeholder="PASSWORD CONFIRMATION"
          />
          <i class="fa-regular fa-eye sign-up-password-confirmation-icon2"></i>
          <br />

          <button className=" sign-up-button btn">SIGN UP</button>
        </div>
        <p className=" sign-up-already">
          {' '}
          Already have an account?{' '}
          <a className="sign-up-login" href="#">
            login
          </a>
        </p>
      </div>
    </div>
  );
}
