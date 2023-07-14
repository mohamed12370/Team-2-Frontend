import PersonalAndEducationAndContactEditprofile from "./PersonalAndEducationAndContactEditprofile";
import AboutAndInProgressAndPreviousEditprofile from "./AboutAndInProgressAndPreviousEditprofile";

function PersonalInfoAndAboutEditprofile({
  editorofileAbout,
  handleEditorofileAbout,
  editorofileEmail,
  handleEditorofileEmail,
  editorofileMobileNumber,
  handleEditorofileMobileNumber,
  editorofileUniversity,
  handleEditorofileUniversity,
  editorofileMajor,
  handleEditorofileMajor,
  editorofileGraduationyear,
  handleEditorofileGraduationyear,
  editorofileAge,
  handleEditorofileAge,
  editorofileNationality,
  handleEditorofileNationality,
  editorofileCountry,
  handleEditorofileCountry,
  editorofileCity,
  handleEditorofileCity,
}) {
  return (
    <>
      <div className="row mt-4 justify-content-between">
        <PersonalAndEducationAndContactEditprofile 
        
        editorofileEmail={editorofileEmail}
        handleEditorofileEmail={handleEditorofileEmail}
        editorofileMobileNumber={editorofileMobileNumber}
        handleEditorofileMobileNumber={handleEditorofileMobileNumber}
        editorofileUniversity={editorofileUniversity}
        handleEditorofileUniversity={handleEditorofileUniversity}
        editorofileMajor={editorofileMajor}
        handleEditorofileMajor={handleEditorofileMajor}
        editorofileGraduationyear={editorofileGraduationyear}
        handleEditorofileGraduationyear={handleEditorofileGraduationyear}
        editorofileAge={editorofileAge}
        handleEditorofileAge={handleEditorofileAge}
        editorofileNationality={editorofileNationality}
        handleEditorofileNationality={handleEditorofileNationality}
        editorofileCountry={editorofileCountry}
        handleEditorofileCountry={handleEditorofileCountry}
        editorofileCity={editorofileCity}
        handleEditorofileCity={handleEditorofileCity}

        
        />
        <AboutAndInProgressAndPreviousEditprofile 
                editorofileAbout={editorofileAbout}
                handleEditorofileAbout={handleEditorofileAbout}
        
        />
      </div>
    </>
  );
}

export default PersonalInfoAndAboutEditprofile;
