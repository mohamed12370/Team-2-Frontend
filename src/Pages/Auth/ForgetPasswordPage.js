import React from 'react';
import ForgetPasswordCard from '../../Coponents/Auth/ForgetPasswordCard';

export default function ForgetPasswordPage() {
  return (
    <>
      <div className="overlay"></div>
      <div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
        <ForgetPasswordCard />
      </div>
    </>
  );
}
