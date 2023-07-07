import About1 from './About1';
import InProgress from '../EditUserProfile/InProgress';
import Previous from '../EditUserProfile/Previous';

function AboutAndInProgressAndPrevious() {
  return (
    <div className="left-div-profile  col-lg-7 col-12">
      <About1 />
      <InProgress />
      <Previous />
    </div>
  );
}

export default AboutAndInProgressAndPrevious;
