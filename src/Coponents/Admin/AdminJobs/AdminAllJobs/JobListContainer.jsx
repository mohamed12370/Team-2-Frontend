import React, { useState } from 'react';
import { adminJobsListData } from './adminJobData';
import { LiaTrashAlt } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

function JobListContainer() {
  const navigate = useNavigate();
  const [jobsStat, setJobsStat] = useState(adminJobsListData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDeleteJob = async () => {
    console.log('write your function deleted here');
    handleClose();
  };

  // const handelDeleteJob = (index) => {
  //   setJobsStat(jobsStat?.filter((_, i) => i !== index));
  // };

  return (
    <div className=" d-flex d-lg-none flex-column gap-4 mt-5 text-capitalize position-relative">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> are you sure from delete this job </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelDeleteJob}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {jobsStat &&
        jobsStat.map((job, i) => (
          <div key={i} className="row bg-black bg-opacity-25 rounded p-4">
            <div className="col-12 col-sm-6 mb-4">
              <div className="d-flex flex-column flex-wrap gap-2">
                <h5 className="text-light text-opacity-75 fw-bold text-capitalize">
                  Company
                </h5>
                <h6 className="mb-0">{job?.company}</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 mb-4">
              <div className="d-flex flex-column flex-wrap gap-2">
                <h5 className="text-light text-opacity-75 fw-bold text-capitalize">
                  Job Position
                </h5>
                <h6>{job?.position}</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 mb-4">
              <div className="d-flex flex-column flex-wrap gap-2">
                <h5 className="text-light text-opacity-75 fw-bold text-capitalize">
                  Filed
                </h5>
                <h6>{job?.field}</h6>
              </div>
            </div>
            <div className="job-status-badge">
              <h6
                className={`badge rounded-pill fs-6 py-2 px-4 ${
                  job?.status === 'Open' ? 'bg_primary' : 'bg_gray'
                }`}
              >
                {job?.status}
              </h6>
            </div>
            <div className="col-12 col-sm-6 mb-4">
              <div className="d-flex flex-column flex-wrap gap-2">
                <h5 className="text-light text-opacity-75 fw-bold text-capitalize">
                  Date Published
                </h5>
                <h6>
                  {job?.postedDay}, &#160; <span>{job?.postedDate}</span>
                </h6>
              </div>
            </div>

            <div className="col-12 col-sm-6 mb-4">
              <div className="d-flex flex-column flex-wrap gap-2">
                <h5 className="text-light text-opacity-75 fw-bold text-capitalize">
                  Time Published
                </h5>
                <h6>{job?.postedTime}</h6>{' '}
              </div>{' '}
            </div>

            <div className="col-12 col-sm-6 mb-4">
              <div
                className="d-flex flex-column flex-wrap gap-2"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/adminapplicationjob/:id`)}
              >
                <h5 className="text-light text-opacity-75 fw-bold text-capitalize">
                  Applications
                </h5>
                <h6>{job?.applications}</h6>
              </div>
            </div>

            <div className="col-12 col-lg-1 ">
              <div className="jobs-delete-add-icon d-flex align-items-center justify-content-end gap-2 text_primary mt-lg-0">
                <Link
                  to={`/adminupdatejob/:id`}
                  className="clickable active-scale"
                >
                  <i
                    className="fa-regular fa-pen-to-square fa-xl"
                    style={{ color: '#bf9b30' }}
                  />
                </Link>
                <div className="clickable active-scale" onClick={handleShow}>
                  {/* <i className="fa-solid fa-trash-can fa-xl" /> */}
                  <LiaTrashAlt size={30} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default JobListContainer;
