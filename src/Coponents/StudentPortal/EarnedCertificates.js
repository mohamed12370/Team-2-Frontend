function EarnedCertificates() {
  return (
    <div className="py-5">
      <div className="col-lg-5 col-sm-12  mb-4 ">
        <h3 className=" Earned-Certificates-title">Earned Certificates </h3>
      </div>
      <div className="row  Earned-Certificates-box  ">
        <div className=" col-sm-10  Earned-Certificates-introuduction-text">
          <h4>Introduction to React js </h4>
          <div className="row ">
            <span className="col-md-4 col-sm-12">
              {' '}
              <span className="Earned-Certificates-instructor-text ">
                Instructor{' '}
              </span>{' '}
              <span className="Earned-Certificates-instructor-subtext">
                {' '}
                : Tariq Ali{' '}
              </span>
            </span>
            <span className="col-md-7 col-sm-12">
              {' '}
              <span className="Earned-Certificates-instructor-text">
                Date Acquired{' '}
              </span>
              <span className=" Earned-Certificates-instructor-subtext">
                {' '}
                : Monday , June 5th{' '}
              </span>
            </span>
          </div>
        </div>

        <div className="col-sm-2  clearfix ">
          <button
            className="view-profile float-end btn Earned-Certificates-button"
            type="button"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default EarnedCertificates;
