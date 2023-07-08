import AboutProfile from './AboutProfile';
import InProgressprofile from './InProgressprofile';
import Previousprofile from './Previousprofile';

function AboutAndInProgressAndPreviousprofile() {
  return (
    <>
      <div className="col-lg-7 col-12 About-InProgress-Previous-box ">
        <AboutProfile />
        <InProgressprofile />
        <Previousprofile />
      </div>
    </>
  );
}

export default AboutAndInProgressAndPreviousprofile;
