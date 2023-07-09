import { Link } from 'react-router-dom';

function ImageAndNameAndButton() {
  return (
    <div className="row Image-Name-Button-box py-4">
      <div className="col-10 ">
        <div className="row">
          <div className=" col-lg-1 col-md-2 col-12 ps-3">
            <i className=" fa-solid fa-circle Image-Name-Button-icon"></i>
          </div>
          <div className="col-md-9 col-12 Image-Name-Button-text ">
            <h3>Balqees hamdi Sabir</h3>
            <p>Computer science, international islamic university</p>
          </div>
        </div>
      </div>
      <div className="col-2  cleacrfix">
        <Link
          to={`/edituserprofile`}
          className="btn float-end  Image-Name-Button-button"
        >
          EDIT PROFILE
        </Link>
      </div>
    </div>
  );
}

export default ImageAndNameAndButton;
