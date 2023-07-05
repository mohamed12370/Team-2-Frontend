//import './style.css'

function ContactInfo() {
  return (
    <>
      <div className="text-white div-cont">Contact info</div>

      <div className="div-email">
        <span className="sp">
          {' '}
          <i className=" fa-solid fa-envelope  en"></i>
        </span>
        <span>Email</span>
        <p> balqeessaber@gmail.com</p>
      </div>

      <div className="div-icon">
        <span className="sp">
          <i className="fa-solid fa-phone-volume en"></i>
        </span>
        <span>Mobile Number</span>
        <p> 0020 1064569047</p>
      </div>
    </>
  );
}

export default ContactInfo;
