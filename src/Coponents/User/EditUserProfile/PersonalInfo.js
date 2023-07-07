function PersonalInfo() {
  return (
    <>
      <div className="text-white edit-div-info">Personal info</div>
      <div className=" row d-flex  edit-person-div ">
        <div className="edit-div-3 my-2">
          <div className="edit-rd">Student ID</div>
          <div className="edit-rd my-3">Age</div>
          <div className="edit-rd ">Nationality</div>
          <div className="edit-rd my-3">Country</div>
          <div className="edit-rd">City</div>
        </div>

        <div className="edit-profile-left">
          <div className="edit-input-div">1420572</div>
          <div>
            <input className="edit-input1" type="text" value="26 yo" />
          </div>
          <div>
            <input className="edit-input1" type="text" value="Sudanese" />
          </div>
          <div>
            <input className="edit-input1" type="text" value="Egypt" />
          </div>
          <div>
            <input className="edit-input1" type="text" value="Cairo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
