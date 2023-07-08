import PersonalAndEducationAndContactEditprofile from './PersonalAndEducationAndContactEditprofile';
import AboutAndInProgressAndPreviousEditprofile from './AboutAndInProgressAndPreviousEditprofile';

function PersonalInfoAndAboutEditprofile() {
  return (
    <>
      <div className="row mt-4 justify-content-between">
        <PersonalAndEducationAndContactEditprofile />
        <AboutAndInProgressAndPreviousEditprofile />
      </div>
    </>
  );
}

export default PersonalInfoAndAboutEditprofile;
