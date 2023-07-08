function EducationEditProfile() {
  return (
    <>
      <div className=" education5-title-box mt-4 ">
        <h4> Education</h4>
      </div>

      <div className=" education5-subtitle-box ">
        <label className=" education5-subtitle">university</label>
        <input
          className=" education5-subtitle-input"
          type="text"
          value="International islamic university"
        />

        <label className=" education5-subtitle">Major</label>

        <select className="education5-subtitle-input">
          <option>Computer science</option>
          <option>Electrical engeneering</option>
          <option>Computer science</option>
        </select>
        <label className=" education5-subtitle">Graduation year</label>
        <input className="education5-subtitle-input" type="text" value="2019" />
      </div>
    </>
  );
}

export default EducationEditProfile;
