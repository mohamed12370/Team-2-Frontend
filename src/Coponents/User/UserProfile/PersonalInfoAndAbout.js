import PersonalAndEducationAndContactprofile from './PersonalAndEducationAndContactprofile';
import AboutAndInProgressAndPreviousprofile from './AboutAndInProgressAndPreviousprofile';

function PersonalInfoAndAbout() {
  return (
    <>
      <div className="row mt-4 justify-content-between">
        <PersonalAndEducationAndContactprofile />
        <AboutAndInProgressAndPreviousprofile />
      </div>
    </>
  );
}

export default PersonalInfoAndAbout;
