import React, { useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Form = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // هنا يمكنك إجراء المزيد من العمليات على الملف المحدد، مثل قراءة محتوياته أو إرساله إلى الخادم

    console.log('تم تحديد الملف:', file.name);
  };
  return (
    <div className="FormSection">
      <div className="d-flex HeaderForm">
        <div>
          <h5>Add job Details</h5>
        </div>
        <div>
          <button className="display">
            <a href="#/">Publish</a>
          </button>
        </div>
      </div>
      <form action="#/">
        <div className="row">
          <div className="col-lg-7 col-sm-12">
            <div>
              <label>Company Name</label> <br />
              <input type="text" />
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label>Filed</label> <br />
                <select>
                  <option></option>
                  <option>2</option>
                  <option>1</option>
                  <option>13</option>
                </select>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label>Location</label> <br />
                <select>
                  <option></option>
                  <option>2</option>
                  <option>1</option>
                  <option>13</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div>
              <div>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <button onClick={handleButtonClick} className="BtnUpload">
                  <div className="shape-upload">
                    {' '}
                    <FaCloudUploadAlt />
                  </div>
                  <h3>
                    Drag & drop files or <a href="/#"> Browse</a>
                  </h3>
                  <p>
                    Supported formates PNG, JPEG, GIF, MP4,PDF,PSD, AI Word, PPT
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-sm-12 mb-5">
          <label>About the Company</label>
          <input type="text" style={{ height: '95px' }} />
        </div>

        <div className="row ">
          <div className="col-lg-5 col-sm-12">
            <label>Position</label>
            <input type="text" />
          </div>
          <div className=" row col-lg-4 col-sm-12 JobType">
            <label>Job Type</label>
            <input type="text" />
          </div>

          <div className="col-lg-3 col-sm-12">
            <div className="d-flex align-items-center gap-2 h-100">
              <div>
                <input type="radio" />
              </div>
              <div className="mt-2">
                <label>Remote</label>
              </div>
              <div>
                <input type="radio" />
              </div>
              <div className="mt-2">
                <label>On Site</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <label>Salary Range</label> <br />
            <div className="d-flex align-items-center">
              <input type="text" />
              <p className="mt-2 ms-2">To</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 mt-2">
            <label></label> <br />
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-4">
            <label>Currency</label> <br />
            <div>
              <select>
                <option></option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="col-lg-12 col-sm-12 ">
            <label>Job Description </label>
            <input type="text" style={{ height: '95px' }} />
          </div>
        </div>

        <div>
          <div className="col-lg-12 col-sm-12 ">
            <label>Job Requriement</label>
            <input type="text" style={{ height: '95px' }} />
          </div>
        </div>

        <div>
          <div className="col-lg-12 col-sm-12 ">
            <label>Skills</label>
            <input type="text" style={{ height: '60px' }} />
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
};

export default Form;
