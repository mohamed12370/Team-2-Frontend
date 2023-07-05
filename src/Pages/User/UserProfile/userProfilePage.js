import React from 'react';
//import './ProfileStyle.css';
import Profile16th from '../../../Coponents/User/UserProfile/Profile16th';
import ImageAndNameAndButton from '../../../Coponents/User/UserProfile/ImageAndNameAndButton';
import PersonalInfoAndAbout from '../../../Coponents/User/UserProfile/PersonalInfoAndAbout';

export default function UserProfilePage() {
  return (
    <>
      <div>
        <div class="overlay"></div>
        <div className="container cont ">
          <Profile16th />
          <ImageAndNameAndButton />
          <PersonalInfoAndAbout />
        </div>
      </div>
    </>
  );
}
