function PersonalInfo() {
  return (
    <>
      <div className=" personal-info-title-box ">
        <h4>Personal info</h4>
      </div>

      <div className=" row  personal-info-subtitle-box">
        <div className="col-6 ">
          <div className="personal-info-subtitle1  ">
            <span>Student ID</span>
          </div>
          <div className="personal-info-subtitle1">
            <span>Age</span>{' '}
          </div>
          <div className="personal-info-subtitle1">
            <span>Nationality</span>{' '}
          </div>
          <div className="personal-info-subtitle1">
            <span>Country</span>{' '}
          </div>
          <div className="personal-info-subtitle1">
            <span>City</span>{' '}
          </div>
        </div>

        <div className="col-6">
          <div className="personal-info-subtitle  ">
            <span>1420572</span>
          </div>
          <div className="personal-info-subtitle">
            <span>26 yo</span>{' '}
          </div>
          <div className="personal-info-subtitle">
            <span>Sudanese</span>{' '}
          </div>
          <div className="personal-info-subtitle">
            <span>Egypt</span>{' '}
          </div>
          <div className="personal-info-subtitle">
            {' '}
            <span>Cairo</span>{' '}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
