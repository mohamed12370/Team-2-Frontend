function LevelAndProgressBar() {
  return (
    <div>
      <div className="row  LevelAndProgressBar">
        <div className=" col-md-10  col ">
          <h4>LEVEL : 1</h4>
        </div>
        <div className="col-md-2 col clearfix">
          <h4 className="float-end">97%</h4>
        </div>
      </div>
      <div className="progress col">
        <div className="progress-bar" style={{ width: `97%` }}></div>
      </div>
      <br />
    </div>
  );
}

export default LevelAndProgressBar;
