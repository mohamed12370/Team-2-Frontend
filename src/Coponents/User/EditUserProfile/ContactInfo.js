function ContactInfo() {
  return (
    <>
      <div className="text-white div-tex">Contact info</div>

      <div class="edit-div-contact">
        <span>
          <i className=" fa-solid fa-envelope fe-icon"></i>
        </span>
        <span>Email</span>
        <input
          className="edit-input3"
          type="email"
          value="balqeessaber@gmail.com"
        />
      </div>

      <div className="div-icon">
        <span>
          <i className="fa-solid fa-phone-volume fe-icon"></i>
        </span>
        <span className="icon-mob-edit">Mobile Number</span>
        <input className="edit-input3" type="email" value="0020 1064569047" />
      </div>
    </>
  );
}

export default ContactInfo;
