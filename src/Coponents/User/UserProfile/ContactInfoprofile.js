function ContactInfoprofile() {
  return (
    <>
      <div className="Contact-info-title-box">
        <h4> Contact info </h4>
      </div>
      <div className="Contact-info-subtitle-box">
        <div className="row">
          <div className="col-1 Contact-info-subtitle-icon">
            <i className=" fa-solid fa-envelope  "></i>
          </div>
          <div className="col-9">
            <span className="Contact-info-subtitle">Email</span>
            <p> balqeessaber@gmail.com</p>
          </div>
        </div>

        <div className="row">
          <div className="col-1 Contact-info-subtitle-icon">
            <i className="fa-solid fa-phone-volume "></i>
          </div>
          <div className="col-9">
            <span className="Contact-info-subtitle">Mobile Number</span>
            <p> 0020 1064569047</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfoprofile;
