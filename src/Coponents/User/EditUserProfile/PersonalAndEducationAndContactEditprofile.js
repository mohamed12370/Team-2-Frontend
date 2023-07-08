import PersonalInfoEditProfile from './PersonalInfoEditProfile';
import EducationEditProfile from './EducationEditProfile';
import ContactInfoEditprofile from './ContactInfoEditprofile';

function PersonalAndEducationAndContactEditprofile() {
  return (
    <>
      <div className="col-lg-4  col-12 personal5-education-contact-box">
        <PersonalInfoEditProfile />
        <EducationEditProfile />
        <ContactInfoEditprofile />
      </div>
    </>
  );
}

export default PersonalAndEducationAndContactEditprofile;
