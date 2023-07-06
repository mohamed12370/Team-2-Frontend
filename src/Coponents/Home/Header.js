import HeaderLogo from '../../Images/seff_logo_transparent.png';

function HeaderHome() {
  return (
    <nav
      className="navbar navbar-expand-lg "
      data-bs-theme="dark"
      style={{ backgroundColor: 'rgba(29, 29, 29, 0.9)' }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={HeaderLogo} alt="logo" height={70} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 navbar-nav-home-list  w-75 ">
            <li className="nav-item">
              <a
                className="nav-link active nav-link-home-text"
                aria-current="page"
                href="#"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  active nav-link-home-text" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active nav-link-home-text"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TECH
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item nav-link-home-text" href="#">
                    LAPTOPS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item nav-link-home-text" href="#">
                    PHONES
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item nav-link-home-text" href="#">
                    TABLESTS
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active nav-link-home-text ">BUSINESS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active nav-link-home-text">SECURITY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active nav-link-home-text">SPORTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active nav-link-home-text">MEDICAL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active nav-link-home-text">STARTUPS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active nav-link-home-text">APPS</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active nav-link-home-text"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                COURSES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item nav-link-home-text" href="#">
                    LAPTOPS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item nav-link-home-text" href="#">
                    PHONES
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item nav-link-home-text" href="#">
                    TABLESTS
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active nav-link-home-text">JOBS</a>
            </li>

            <li className="nav-item"></li>
          </ul>
          <button
            type="button"
            className=" btn nav-bar-button-color rounded-1 text-white ms-5 nav-link-home-text"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HeaderHome;
