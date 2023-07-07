import React, { useState } from 'react';
import { adminJobsListData } from './adminJobData';
import { LiaTrashAlt } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';

function JobListContainerLg() {
  const navigate = useNavigate();
  const [jobsStat, setJobsStat] = useState(adminJobsListData);

  const handelDeleteJob = (index) => {
    setJobsStat(jobsStat?.filter((e, i) => i !== index));
  };
  return (
    <div className="d-none d-lg-flex flex-column gap-4 mt-5 text-capitalize">
      <div className="row align-items-center fw-bold px-4">
        <div className="col-6 col-lg-3">Company</div>
        <div className="col-6 col-lg-3">Position</div>
        <div className="col-6 col-lg-2">Status</div>
        <div className="col-6 col-lg-2">Posted At</div>
        <div className="col-6 col-lg-2">#Applications</div>
        <div className="col-6 col-lg-1"></div>
      </div>
      {jobsStat &&
        jobsStat.map((job, i) => (
          <div
            key={i}
            className="row bg-black bg-opacity-25 align-items-center rounded p-4"
          >
            <div className="col-6 col-lg-3">
              <h6 className="mb-0">{job?.company}</h6>
            </div>
            <div className="col-6 col-lg-3">{job?.position}</div>
            <div className="col-6 col-lg-2 ">
              <h6
                className={`badge rounded-pill fs-6 py-2 px-4 ${
                  job?.status === 'Open' ? 'bg_primary' : 'bg_gray'
                }`}
              >
                {job?.status}
              </h6>
            </div>
            <div className="col-6 col-lg-2">
              <h6>{`${job?.postedDay},  ${job?.postedDate}`}</h6>
              <h6>{job?.postedTime}</h6>
            </div>
            <div
              className="col-6 col-lg-1"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/adminapplicationjob/:id`)}
            >
              <h6>{job?.applications}</h6>
            </div>
            <div className="col-6 col-lg-1 d-flex align-items-center gap-2 text_primary">
              <Link
                to={`/adminupdatejob/:id`}
                className="clickable active-scale"
              >
                <i
                  className="fa-regular fa-pen-to-square fa-xl"
                  style={{ color: '#bf9b30' }}
                />
              </Link>

              <div
                className="clickable active-scale"
                onClick={() => handelDeleteJob(i)}
              >
                {/* <i className="fa-solid fa-trash-can fa-xl" /> */}
                <LiaTrashAlt size={30} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default JobListContainerLg;
