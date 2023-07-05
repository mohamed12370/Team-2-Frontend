//import './style.css'

function ContactInfo() {
  return (
    <>
      <div className="text-white div-tex">Contact info</div>

      <div class="div-2">
        <span>
          <i className=" fa-solid fa-envelope fe"></i>
        </span>
        <span>Email</span>
        <input className="input3" type="email" value="balqeessaber@gmail.com" />
      </div>

      <div className="div-icon">
        <span>
          <i className="fa-solid fa-phone-volume fe"></i>
        </span>
        <span className="icon-mob">Mobile Number</span>
        <input className="input3" type="email" value="0020 1064569047" />
      </div>
    </>
  );
}

export default ContactInfo;
