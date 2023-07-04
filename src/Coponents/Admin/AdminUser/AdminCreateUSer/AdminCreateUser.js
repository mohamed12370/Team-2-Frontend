import React from 'react';

export default function AdminCreateUser() {
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
