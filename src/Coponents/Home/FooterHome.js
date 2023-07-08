import footerlogo from '../../Images/seff_logo_transparent.png';

function FooterHome() {
  return (
    <>
      <div className="footer-home-container ">
        <div className="clearfix ">
          <div className="float-start ">
            <img
              src={footerlogo}
              alt=""
              className="footer-image"
              width={200}
              height={200}
            />
          </div>

          <div className=" float-end footer-icon-arow-box">
            <i class="fa-solid fa-circle-up footer-icon-arow"></i>
          </div>
        </div>

        <div className="clearfix">
          <div className="float-start">
            <div>
              {' '}
              <h3 className="footer-title">SOFTWARE ENGINEERING FOR FUTURE</h3>
            </div>
            <div className="mt-4 footer-text-header-box">
              <span>HOME</span>
              <span className="footer-text-header">ABOUT</span>
              <span className="footer-text-header">TECH</span>
              <span className="footer-text-header">BUSINESS</span>
              <span className="footer-text-header">SECURITY</span>
              <br />
              <span>MEDICAL</span>
              <span className="footer-text-header">STARTUPS</span>
              <span className="footer-text-header">APPS</span>
              <span className="footer-text-header">COURSES</span>
              <span className="footer-text-header">CONTACT US</span>
              <span className="footer-text-header">SPORTS</span>
            </div>
          </div>

          <div className="float-end footer-icon12-box ">
            <p className="footer-icon12-box-text">
              sefffuture@gmail.com{' '}
              <i class="fa-solid fa-envelope footer-icon12"></i>
            </p>
            <p className="footer-icon12-box-text ">
              +20 109 8481 288{' '}
              <i class="fa-solid fa-phone-volume footer-icon12"></i>
            </p>
            <p className="footer-icon12-box-text">+20 155 5177 645</p>
          </div>
        </div>
        <hr />
        <div className="clearfix">
          <div className="float-start">
            <span>@2023 EGYPT,ALL RIGHTS RESERVED</span>
          </div>
          <div className="float-end footer-icon11-box">
            <i class="fa-brands fa-facebook  footer-icon11"></i>
            <i class="fa-brands fa-twitter  footer-icon11"></i>
            <i class="fa-brands fa-instagram  footer-icon11"></i>
            <i class="fa-brands fa-linkedin  footer-icon11"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterHome;
