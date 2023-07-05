//import './style.css'
import PersonalAndEducationAndContact from './PersonalAndEducationAndContact';
import AboutAndInProgressAndPrevious from './AboutAndInProgressAndPrevious';

function PersonalInfoAndAbout() {
  return (
    <div className="content row d-flex justify-content-between">
      <PersonalAndEducationAndContact />
      <AboutAndInProgressAndPrevious />
    </div>
  );
}

export default PersonalInfoAndAbout;
