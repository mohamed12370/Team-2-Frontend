import { Link } from 'react-router-dom';
import HeaderLogo from '../../Images/seff_logo_transparent.png';
import { useEffect, useState } from 'react';

function HeaderHome() {
  const [activeLink, setactiveLink] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setactiveLink(currentPath);
  }, []);

  const handleClick = (path) => {
    setactiveLink(path);
  };

  return (
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={HeaderLogo} alt="logo" height={70} />
        </Link>
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
              <Link
                to={`/`}
                className={`nav-link nav-link-home-text ${
                  activeLink === '/' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/')}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-link-home-text ${
                  activeLink === '/about' ? 'active-nav' : ''
                }`}
                href="/#"
                onClick={() => handleClick('/about')}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle nav-link-home-text ${
                  activeLink.startsWith('/tech') ? 'active-nav' : ''
                }`}
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TECH
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item nav-link-home-text"
                    href="#"
                    onClick={() => handleClick('/tech/laptops')}
                  >
                    LAPTOPS
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item nav-link-home-text"
                    href="#"
                    onClick={() => handleClick('/tech/phones')}
                  >
                    PHONES
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item nav-link-home-text"
                    href="#"
                    onClick={() => handleClick('/tech/tablets')}
                  >
                    TABLESTS
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to={`/userallarticle`}
                className={`nav-link nav-link-home-text ${
                  activeLink === '/userallarticle' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/userallarticle')}
              >
                BUSINESS
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-link-home-text ${
                  activeLink === '/security' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/security')}
              >
                SECURITY
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-link-home-text ${
                  activeLink === '/sports' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/sports')}
              >
                SPORTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-link-home-text ${
                  activeLink === '/medical' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/medical')}
              >
                MEDICAL
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-link-home-text ${
                  activeLink === '/startups' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/startups')}
              >
                STARTUPS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-link-home-text ${
                  activeLink === '/apps' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/apps')}
              >
                APPS
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link
                to={`/userallcourses`}
                className={`nav-link dropdown-toggle nav-link-home-text ${
                  activeLink.startsWith('/userallcourses') ? 'active-nav' : ''
                }`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleClick('/userallcourses')}
              >
                COURSES
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to={`/userallcourses`}
                    className="dropdown-item nav-link-home-text"
                    onClick={() => handleClick('/userallcourses')}
                  >
                    LAPTOPS
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item nav-link-home-text"
                    href="/#"
                    onClick={() => handleClick('/userallcourses/phones')}
                  >
                    PHONES
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item nav-link-home-text"
                    href="/#"
                    onClick={() => handleClick('/userallcourses/tablets')}
                  >
                    TABLETS
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to={`/useralljob`}
                className={`nav-link nav-link-home-text ${
                  activeLink === '/useralljob' ? 'active-nav' : ''
                }`}
                onClick={() => handleClick('/useralljob')}
              >
                JOBS
              </Link>
            </li>

            <li className="nav-item"></li>
          </ul>
          <Link
            to={`/contactus`}
            type="button"
            className=" btn nav-bar-button-color rounded-1 text-white ms-5 nav-link-home-text"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HeaderHome;
