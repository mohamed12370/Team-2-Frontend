function ContactInfoEditprofile({
  editorofileEmail,
  handleEditorofileEmail,
  editorofileMobileNumber,
  handleEditorofileMobileNumber,

}) {
  return (
    <>
      <div className="Contact5-info-title-box">
        <h4> Contact info </h4>
      </div>
      <div className="Contact5-info-subtitle-box">
        <div className="row">
          <div className="col-1 Contact5-info-subtitle-icon">
            <i className=" fa-solid fa-envelope  "></i>
          </div>
          <div className="col-10">
            <span className="Contact5-info-subtitle">Email</span>
            <input
              className="Contact5-info-subtitle-input"
              type="email"
              required
              value={editorofileEmail}
              onChange={handleEditorofileEmail}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-1 Contact5-info-subtitle-icon">
            <i className="fa-solid fa-phone-volume "></i>
          </div>
          <div className="col-10">
            <span className="Contact5-info-subtitle">Mobile Number</span>
            <input
              className="Contact5-info-subtitle-input"
              type="email"
              required
              value={editorofileMobileNumber}
              onChange={handleEditorofileMobileNumber}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfoEditprofile;
