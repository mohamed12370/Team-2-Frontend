//import './style.css'
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import ContactInfo from './ContactInfo';

function PersonalAndEducationAndContact() {
  return (
    <div className="right-div py-5 col-lg-4 col-12">
      <PersonalInfo />
      <Education />
      <ContactInfo />
    </div>
  );
}

export default PersonalAndEducationAndContact;
