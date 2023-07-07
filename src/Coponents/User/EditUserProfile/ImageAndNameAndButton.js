function ImageAndNameAndButton() {
  return (
    <div className="text-white d-flex row person my-5">
      <div className="col-lg-1 icon-1 col-md-1 me-2 d-flex  edit-profile-icon">
        <i className=" fa-solid fa-circle text-white icon-edit pb-3"></i>
        <div className="btn-hidde  col-lg-1 edit-button ">
          <button className="btn hidde text-white EDIT-PROFILE">
            EDIT PROFILE
          </button>
        </div>
      </div>

      <div className="col-lg-4 col-md-6  div-1-edit-profile ">
        <div className="div-pa">
          <h3 className="edit-profile-h3">Balqees hamdi Sabir</h3>
          <p className="edit-profile-p">
            Computer science, international islamic university
          </p>
        </div>
        <i className="edit-profile-icon-2 fa-regular fa-pen-to-square"></i>
      </div>
    </div>
  );
}

export default ImageAndNameAndButton;
