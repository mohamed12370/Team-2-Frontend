import PersonalAndEducationAndContact from './PersonalAndEducationAndContact';
import AboutAndInProgressAndPrevious from './AboutAndInProgressAndPrevious';

function PersonalInfoAndAbout() {
  return (
    <div className="content-profile row d-flex justify-content-between">
      <PersonalAndEducationAndContact />
      <AboutAndInProgressAndPrevious />
    </div>
  );
}

export default PersonalInfoAndAbout;
