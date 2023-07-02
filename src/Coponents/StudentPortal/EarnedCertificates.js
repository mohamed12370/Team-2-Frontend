function EarnedCertificates() {
  return (
    <div className="py-5">
      <div className="col-lg-5 col-sm-12  my-5 ">
        <h3 className="titles-page">Earned Certificates </h3>
      </div>
      <div className="row  Earned-Certificates-box  py-4">
        <div className=" col-sm-10  introuduction-text">
          <h4>Introduction to React js </h4>
          <div className="row ">
            <span className="col-md-3 col-sm-12">
              {' '}
              <span className="instructor-text ">Instructor </span>{' '}
              <span className="instructor-subtext"> : Tariq Ali </span>
            </span>
            <span className="col-md-4 col-sm-12">
              {' '}
              <span className="instructor-text">Date Acquired </span>
              <span className=" instructor-subtext"> : Monday , June 5th </span>
            </span>
          </div>
        </div>
        <div className="col-sm-2 my-3  clearfix ">
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
