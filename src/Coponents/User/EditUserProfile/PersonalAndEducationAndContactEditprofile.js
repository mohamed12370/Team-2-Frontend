import PersonalInfoEditProfile from './PersonalInfoEditProfile';
import EducationEditProfile from './EducationEditProfile';
import ContactInfoEditprofile from './ContactInfoEditprofile';

function PersonalAndEducationAndContactEditprofile({
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
      <div className="col-lg-4  col-12 personal5-education-contact-box">
        <PersonalInfoEditProfile 
                editorofileAge={editorofileAge}
                handleEditorofileAge={handleEditorofileAge}
                editorofileNationality={editorofileNationality}
                handleEditorofileNationality={handleEditorofileNationality}
                editorofileCountry={editorofileCountry}
                handleEditorofileCountry={handleEditorofileCountry}
                editorofileCity={editorofileCity}
                handleEditorofileCity={handleEditorofileCity}
        
        />
        <EducationEditProfile 
                editorofileUniversity={editorofileUniversity}
                handleEditorofileUniversity={handleEditorofileUniversity}
                editorofileMajor={editorofileMajor}
                handleEditorofileMajor={handleEditorofileMajor}
                editorofileGraduationyear={editorofileGraduationyear}
                handleEditorofileGraduationyear={handleEditorofileGraduationyear}
        
        />
        <ContactInfoEditprofile 
                editorofileEmail={editorofileEmail}
                handleEditorofileEmail={handleEditorofileEmail}
                editorofileMobileNumber={editorofileMobileNumber}
                handleEditorofileMobileNumber={handleEditorofileMobileNumber}
        
        />
      </div>
    </>
  );
}

export default PersonalAndEducationAndContactEditprofile;
