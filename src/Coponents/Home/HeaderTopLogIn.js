import { Link } from 'react-router-dom';

function HeaderTopLogIn() {
  return (
    <nav class="navbar  navbar-expand-sm navbar-globle-color">
      <div class="container ">
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon nav-globle5-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item ">
              <Link to={`/login`} class="nav-link ">
                LOGIN
              </Link>
            </li>
            <li class="nav-item nav-globle5 mx-3">
              <Link to={`/adminalluser`} class="nav-link ">
                ADMINAL PANEL
              </Link>
            </li>
            <li class="nav-item ">
              <Link to={`/userprofile`} class="nav-link ">
                PROFILE
              </Link>
            </li>
            <li class="nav-item ">
              <Link to={`/upcomingexam`} class="nav-link ">
                Exams
              </Link>
            </li>
            <li class="nav-item ">
              <Link to={`/studentportal`} class="nav-link ">
                Student Portal
              </Link>
            </li>
            <li class="nav-item ">
              <Link to={`/instructorportal`} class="nav-link ">
                Instructor Portal
              </Link>
            </li>
            <li class="nav-item nav-globle5  ms-3">
              <button class="nav-link text-light">LOGOUT</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderTopLogIn;
