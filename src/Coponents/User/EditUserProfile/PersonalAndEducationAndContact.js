import PersonalInfo from './PersonalInfo';
import Education from './Education';
import ContactInfo from './ContactInfo';

function PersonalAndEducationAndContact() {
  return (
    <div className="edit-right-div col-lg-4 col-12">
      <PersonalInfo />
      <Education />
      <ContactInfo />
    </div>
  );
}

export default PersonalAndEducationAndContact;
