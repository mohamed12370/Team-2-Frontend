function PropsTitlePages(props) {
  return (
    <div className="row">
      <div className=" col-md-10  col-9 ">
        <h1 className="welcom-back">
          welcom back <h1 className="welcom-back1 d-inline ">{props.title}</h1>{' '}
        </h1>
      </div>
      <div className="col-md-2 col-3 clearfix">
        <button className="btn-view-profile float-end btn py-3 " type="button">
          view profile
        </button>
      </div>
    </div>
  );
}

export default PropsTitlePages;
