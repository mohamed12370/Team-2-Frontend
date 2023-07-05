//import './style.css';

import { Link } from 'react-router-dom';

function ImageAndNameAndButton() {
  return (
    <div class="text-white d-flex row person">
      <div class="col-lg-1 icon-1 col-md-2 me-2 d-flex">
        <i class="text-white fa-solid fa-circle iconnn"></i>
      </div>

      <div class="col-lg-4 col-md-6  div-1">
        <div class="div-pa">
          <h3>Balqees hamdi Sabir</h3>
          <p>Computer science, international islamic university</p>
        </div>
        <Link
          to={`/edituserprofile`}
          class="btn  text-white bg-warning  Image-Name-button "
        >
          EDIT PROFILE
        </Link>
      </div>
    </div>

    //   <div className="text-white d-flex row person my-3">
    //   <div className="col-lg-2 icon-1 col-md-2 me-2 d-flex  omnai">
    //     <i className=" fa-solid fa-circle text-white icon-- pb-3"></i>
    //     <div className="btn-hidde  col-lg-1 sttyle">
    //       <button className="btn hidde text-white EDIT-PROFILE">EDIT PROFILE</button>

    //     </div>
    //   </div>

    //   <div className=" col-md-12  div-1 hh">
    //     <div className="div-pa">
    //       <h3 >Balqees hamdi Sabir</h3>
    //       <p >Computer science, international islamic university</p>
    //     </div>

    //   </div>

    // </div>
  );
}

export default ImageAndNameAndButton;
