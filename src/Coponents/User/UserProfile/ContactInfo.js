function ContactInfo() {
  return (
    <>
      <div className="text-white div-cont-profile">Contact info</div>

      <div className="div-email-profile">
        <span className="sp-profile">
          {' '}
          <i className=" fa-solid fa-envelope  enve-profile"></i>
        </span>
        <span>Email</span>
        <p> balqeessaber@gmail.com</p>
      </div>

      <div className="div-icon-profile">
        <span className="sp-profile">
          <i className="fa-solid fa-phone-volume enve-profile"></i>
        </span>
        <span>Mobile Number</span>
        <p> 0020 1064569047</p>
      </div>
    </>
  );
}

export default ContactInfo;
