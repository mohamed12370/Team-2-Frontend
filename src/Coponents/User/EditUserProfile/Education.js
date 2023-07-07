function Education() {
  return (
    <>
      <div className="text-white edit-profile-text">Education</div>

      <div className="edit-div-4">
        <label className="edit-label1">university</label>
        <input
          className="edit-input2"
          type="text"
          value="International islamic university"
        />
        <label className="edit-label1">Major</label>
        <select className="edit-input2">
          <option>Computer science</option>
          <option>Electrical engeneering</option>
          <option>Computer science</option>
        </select>
        <label className="edit-label1">Graduation year</label>
        <input className="edit-input2" type="text" value="2019" />
      </div>
    </>
  );
}

export default Education;
