import React from 'react';
import './LoginPage.css';
import LoginCard from '../../Coponents/Auth/LoginCard';
import LoginModal from '../../Coponents/Auth/LoginModal';

export default function LoginPage() {
  return (
    <>
      <div className="overlay"></div>
      <div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
        <LoginCard />
        <LoginModal />
      </div>
    </>
  );
}
