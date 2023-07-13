import React from 'react';
import ResetPasswordCard from '../../Coponents/Auth/ResetPasswordCard';

export default function ResetPasswordPage() {
  return (
    <>
      <div className="overlay-body"></div>
      <div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
        <ResetPasswordCard />
      </div>
    </>
  );
}
