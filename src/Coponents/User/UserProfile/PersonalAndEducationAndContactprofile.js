import PersonalInfo from './PersonalInfoProfile';
import Education from './EducationProfile';
import ContactInfoprofile from './ContactInfoprofile';

function PersonalAndEducationAndContactprofile() {
  return (
    <>
      <div className="col-lg-4  col-12 personal-education-contact-box">
        <PersonalInfo />
        <Education />
        <ContactInfoprofile />
      </div>
    </>
  );
}

export default PersonalAndEducationAndContactprofile;
