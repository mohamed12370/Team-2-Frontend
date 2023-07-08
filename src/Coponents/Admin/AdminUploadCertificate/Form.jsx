import React from "react";
import UPloader from "./Uploader"

const Form = () => {
  return (
    <div className="FormSection ">
      <form action="#/" >
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 order-1">
            <label>Student Name</label> <br />
             <select>
                <option></option>
            </select>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 order-3">
            <label>Date Acquired</label> <br />
            <input type="text" className="w-100" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 order-4">
            <label>Upload Date</label> <br />
            <input type="text" className="w-100"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 order-2">
            <label className="course-title">Course <span>Title</span></label> <br />
            <select>
                <option></option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 order-5">
            <label>Upload Certificate</label> <br />
            <UPloader/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;