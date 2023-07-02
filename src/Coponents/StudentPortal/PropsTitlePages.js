function PropsTitlePages({ title }) {
  return (
    <div className="container">
      <div className="row align-items-md-center">
        <div className="col-8 col-md-8  ">
          <h1 className="welcom-back">
            welcom back <h1 className="welcom-back1 d-inline ">{title}</h1>
          </h1>
        </div>
        <div className="col-4 col-md-4">
          <button className="btn-view-profile btn py-md-1 px-md-2 ms-auto">
            view profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropsTitlePages;
