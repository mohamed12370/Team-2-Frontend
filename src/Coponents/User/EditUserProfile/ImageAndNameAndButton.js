//import './style.css'

function ImageAndNameAndButton() {
  return (
    <div className="text-white d-flex row person my-5">
      <div className="col-lg-1 icon-1 col-md-1 me-2 d-flex  omnai">
        <i className=" fa-solid fa-circle text-white icon-- pb-3"></i>
        <div className="btn-hidde  col-lg-1 sttyle">
          <button className="btn hidde text-white EDIT-PROFILE">
            EDIT PROFILE
          </button>
        </div>
      </div>

      <div className="col-lg-4 col-md-6  div-1 hh">
        <div className="div-pa">
          <h3 className="Balqees">Balqees hamdi Sabir</h3>
          <p className="Computer">
            Computer science, international islamic university
          </p>
        </div>
        <i className=" icon-2 fa-regular fa-pen-to-square"></i>
      </div>
    </div>
  );
}

export default ImageAndNameAndButton;
