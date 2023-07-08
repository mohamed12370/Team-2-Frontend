function PersonalInfoEditProfile() {
  return (
    <>
      <div className=" personal5-info-title-box ">
        <h4>Personal info</h4>
      </div>

      <div className=" row  personal5-info-subtitle-box">
        <div className="col-6 ">
          <div className="personal5-info-subtitle1  ">
            <span>Student ID</span>
          </div>
          <div className="personal5-info-subtitle1">
            <span>Age</span>{' '}
          </div>
          <div className="personal5-info-subtitle1">
            <span>Nationality</span>{' '}
          </div>
          <div className="personal5-info-subtitle1">
            <span>Country</span>{' '}
          </div>
          <div className="personal5-info-subtitle1">
            <span>City</span>{' '}
          </div>
        </div>

        <div className="col-6">
          <div className=" personal5-info-subtitle-id">
            <span>1420572</span>
          </div>
          <div>
            <input
              className="personal5-info-subtitle-input"
              type="text"
              value="26 yo"
            />
          </div>
          <div>
            <input
              className="personal5-info-subtitle-input"
              type="text"
              value="Sudanese"
            />
          </div>
          <div>
            <input
              className="personal5-info-subtitle-input"
              type="text"
              value="Egypt"
            />
          </div>
          <div>
            <input
              className="personal5-info-subtitle-input"
              type="text"
              value="Cairo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfoEditProfile;
