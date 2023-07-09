import React from 'react';

function ContactForm() {
  return (
    <>
      <div className=" col-sm-12 col-lg-6  parent-contact2 p-4 mt-2">
        <div className="parent-GET">
          <h4>GET IN TOUCH</h4>
          <p>wed love to here from you</p>
        </div>
        <div className="d-flex justify-content-between parent-input row ">
          <div className="  col-12 col-lg-6">
            <p className="">First Name </p>
            <input type="text" className="  w-100 text-white "></input>
          </div>
          <div className=" col-12 col-lg-6 div-last ">
            <p className="">Last Name </p>
            <input type="text" className=" w-100  text-white  "></input>
          </div>
        </div>
        <div className="d-flex mt-2 justify-content-between parent-input row ">
          <div className="  col-12 col-lg-6">
            <p className="">Email </p>
            <input type="email" className="  w-100 text-white "></input>
          </div>
          <div className="   col-12 col-lg-6 div-last">
            <p className="">Phone Number </p>
            <input type="text" className=" w-100  text-white  "></input>
          </div>
        </div>
        <div className="mt-2 w-100 parent-input">
          <p className="">Message </p>
          <textarea
            id="form6Example1"
            rows={4}
            className="form-control text-white"
          ></textarea>
        </div>
        <button className="btn mt-5 px-5">SEND</button>
      </div>
    </>
  );
}

export default ContactForm;
