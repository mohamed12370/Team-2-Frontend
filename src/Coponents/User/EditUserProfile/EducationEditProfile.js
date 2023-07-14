function EducationEditProfile({
  editorofileUniversity,
  handleEditorofileUniversity,
  editorofileMajor,
  handleEditorofileMajor,
  editorofileGraduationyear,
  handleEditorofileGraduationyear,

}) {
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
          required
          value={editorofileUniversity}
         onChange={handleEditorofileUniversity}
        />

        <label className=" education5-subtitle">Major</label>

        <select  className="education5-subtitle-input"
        required
        value={editorofileMajor}
        onChange={handleEditorofileMajor}
        >
          <option value="Computer science">Computer science</option>
          <option value="Electrical engeneering">Electrical engeneering</option>
          <option value="Computer science">Computer science</option>
        </select>
        <label className=" education5-subtitle">Graduation year</label>
        <input className="education5-subtitle-input" type="text" required value={editorofileGraduationyear}
        onChange={handleEditorofileGraduationyear} />
      </div>
    </>
  );
}

export default EducationEditProfile;
