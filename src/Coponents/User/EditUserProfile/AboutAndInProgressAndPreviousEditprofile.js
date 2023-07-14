import AboutEidtprofile from './AboutEidtprofile';
import InProgressEditprofile from './InProgressEditprofile';
import PreviousEditprofile from './PreviousEditprofile';

function AboutAndInProgressAndPreviousEditprofile({
  editorofileAbout,
  handleEditorofileAbout,

}) {
  return (
    <>
      <div className="col-lg-7 col-12 About5-InProgress-Previous-box ">
        <AboutEidtprofile 
                editorofileAbout={editorofileAbout}
                handleEditorofileAbout={handleEditorofileAbout}
        />
        <InProgressEditprofile />
        <PreviousEditprofile />
      </div>
    </>
  );
}

export default AboutAndInProgressAndPreviousEditprofile;
