import React from 'react';
import './ContactUsPage.css';
import ConatctInfo from '../../Coponents/ContactUs/ConatctInfo';
import Title from '../../Coponents/ContactUs/Title';
import ContactForm from '../../Coponents/ContactUs/ContactForm';

export default function ContactUsPage() {
  return (
    <>
      <section className="CONTACT_US">
        <div className="overlay-contact">
          <div className="container">
            <Title />
            <div className="row text-white content-contact">
              <ConatctInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
