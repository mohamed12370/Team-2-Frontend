function PropsTitlePages({ title }) {
  return (
    <div className="row">
      <div className="  col-9 ">
        <h1 className="welcom-back">
          welcom back <span className="welcom-back1 d-inline ">{title}</span>{' '}
        </h1>
      </div>
      <div className=" col-3 clearfix">
        <button className="btn-view-profile float-end btn py-1 " type="button">
          view profile
        </button>
      </div>
    </div>
  );
}

export default PropsTitlePages;
