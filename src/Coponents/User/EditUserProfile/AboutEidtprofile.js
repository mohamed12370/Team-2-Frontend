function AboutEidtprofile({
  editorofileAbout,
  handleEditorofileAbout,

}) {
  return (
    <>
      <div className="About5-Profile-box">
        <h4 className="About5-Profile-title mb-3">About</h4>
        <textarea className="About5-Profile-subtitle" required value={editorofileAbout}
        onChange={handleEditorofileAbout}>
          At vero eos et accusamus et iusto odio dignissimos qui blanditiis
          deleniti atque corrupti quos dolores
        </textarea>
      </div>
    </>
  );
}

export default AboutEidtprofile;
