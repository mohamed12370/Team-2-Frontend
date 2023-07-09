import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function ConatctInfo() {
  return (
    <>
      <div className="col-lg-6 col-sm-12 parent-contact mt-4">
        <div className="mt-5 parent2 ">
          <div className="data ">
            <h4>Visit us</h4>
            <p className="mt-3 ">here is adresss of the orgnization</p>
          </div>
          <div className="data mt-5">
            <h4>Leave us an email</h4>
            <p className="mt-3">maillto:sefffuture@gmail.com</p>
          </div>
          <div className="data mt-5 ">
            <h4>Follow Us on social media</h4>
            <div className="icon d-flex justify-content-between w-50 mt-3 position-relative mb-5 mb-lg-0">
              <a href="/#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConatctInfo;
