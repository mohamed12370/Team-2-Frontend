import AboutAndInProgressAndPrevious from './AboutAndInProgressAndPrevious';
import PersonalAndEducationAndContact from './PersonalAndEducationAndContact';

function PersonalInfoAndAbout() {
  return (
    <div className="content row d-flex justify-content-between">
      <PersonalAndEducationAndContact />
      <AboutAndInProgressAndPrevious />
    </div>
  );
}

export default PersonalInfoAndAbout;
