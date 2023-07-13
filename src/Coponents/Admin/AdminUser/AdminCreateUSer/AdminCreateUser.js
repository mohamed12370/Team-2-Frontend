import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdminCreateUser() {
  // all state variables
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [status, setstatus] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('');
  const [mobileNum, setmobileNum] = useState('');
  const [userId, setuserId] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle state changes
  const handlefirstName = (event) => {
    setfirstName(event.target.value);
  };
  const handlelastName = (event) => {
    setlastName(event.target.value);
  };
  const handlestatus = (event) => {
    setstatus(event.target.value);
  };
  const handleEmail = (event) => {
    setemail(event.target.value);
  };
  const handlerole = (event) => {
    setrole(event.target.value);
  };
  const handleMobileNum = (event) => {
    setmobileNum(event.target.value);
  };
  const handleUserId = (event) => {
    setuserId(event.target.value);
  };
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setconfirmPassword(event.target.value);
  };

  // handle user submission
  const handlesubmit = (e) => {
    e.preventDefault();
    if (
      firstName &
      lastName &
      email &
      password &
      confirmPassword &
      mobileNum &
      status &
      userId &
      (role === '')
    ) {
      //alert("Please fill in all fields");
    } else if (password === confirmPassword) {
      const userData = new FormData();
      userData.append('firstName', firstName);
      userData.append('lastName', lastName);
      userData.append('status', status);
      userData.append('email', email);
      userData.append('role', role);
      userData.append('mobileNum', mobileNum);
      userData.append('userId', userId);
      userData.append('password', password);
      userData.append('confirmPassword', confirmPassword);
      console.log(userData);
    } else {
      //alert("Passwords do not match");
    }
  };

  return (
    <div className="FormSection">
      <div className="d-flex HeaderForm">
        <div>
          <h5>Add User Details</h5>
        </div>
        <div>
          <button className="display">
            <a href="#/">Publish</a>
          </button>
        </div>
      </div>
      <form action="#/">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <label>First Name</label> <br />
            <input type="text" className="w-100" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <label>Last Name </label> <br />
            <input type="text" className="w-100" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <label>Status</label> <br />
            <select>
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <label>Email</label> <br />
            <input type="email" className="w-100" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <label>Role</label> <br />
            <select>
              <option>Student</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label>Mobile Number</label> <br />
            <input type="tel" className="w-100" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label>User ID</label> <br />
            <input type="text" className="w-100" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label>Password</label> <br />
            <input type="password" className="w-100" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label>Password Confirmation</label> <br />
            <input type="password" className="w-100" />
          </div>
        </div>
        <div className="row TwoButton">
          <div className=" col-md-2 col-sm-12">
            <button className="BtnOne">
              <a href="#/">Cancel</a>
            </button>
          </div>
          <div className=" col-md-2 col-sm-12">
            <button>
              <a href="#/">Save</a>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
