import React, { useState } from 'react';

function ContactForm() {
  //  create state object from
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');
  //  handle state change
  const handleFname = (e) => {
    setfname(e.target.value);
  };

  const handleLname = (e) => {
    setlname(e.target.value);
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handlePhone = (e) => {
    setphone(e.target.value);
  };
  const handleMessage = (e) => {
    setmessage(e.target.value);
  };

  // handle submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = new FormData();
    contactData.append('fname', fname);
    contactData.append('lname', lname);
    contactData.append('email', email);
    contactData.append('phone', phone);
    contactData.append('message', message);
  };

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
