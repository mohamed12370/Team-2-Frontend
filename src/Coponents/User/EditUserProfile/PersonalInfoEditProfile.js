function PersonalInfoEditProfile({
  editorofileAge,
  handleEditorofileAge,
  editorofileNationality,
  handleEditorofileNationality,
  editorofileCountry,
  handleEditorofileCountry,
  editorofileCity,
  handleEditorofileCity,
}) {
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
              required
              value={editorofileAge}
              onChange={handleEditorofileAge}
            />
          </div>
          <div>
            <input
              className="personal5-info-subtitle-input"
              type="text"
              required
              value={editorofileNationality}
              onChange={handleEditorofileNationality}
            />
          </div>
          <div>
            <input
              className="personal5-info-subtitle-input"
              type="text"
              required
              value={editorofileCountry}
              onChange={handleEditorofileCountry}
            />
          </div>
          <div>
            <input
              className="personal5-info-subtitle-input"
              type="text"
              required
              value={editorofileCity}
              onChange={handleEditorofileCity}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfoEditProfile;
