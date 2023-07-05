//import './style.css'

function PersonalInfo() {
  return (
    <>
      <div className="text-white  div-info">Personal info</div>
      <div className=" row d-flex  divv ">
        <div className="div-3">
          <div className="rd">Student ID</div>
          <div className="rd">Age</div>
          <div className="rd">Nationality</div>
          <div className="rd">Country</div>
          <div className="rd">City</div>
        </div>

        <div className="left">
          <div className="input-div">1420572</div>
          <div>
            <input className="input1" type="text" value="26 yo" />
          </div>
          <div>
            <input className="input1" type="text" value="Sudanese" />
          </div>
          <div>
            <input className="input1" type="text" value="Egypt" />
          </div>
          <div>
            <input className="input1" type="text" value="Cairo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
