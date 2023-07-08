import React from 'react';
import './ProfileStyle.css';
import Profile6thJun2023 from '../../../Coponents/User/UserProfile/Profile6thJun2023';
import ImageAndNameAndButton from '../../../Coponents/User/UserProfile/ImageAndNameAndButtonProfile';
import PersonalInfoAndAbout from '../../../Coponents/User/UserProfile/PersonalInfoAndAbout';

export default function UserProfilePage() {
  return (
    <>
      <div className="profile-container ">
        <div className="profile-overlayOnImage"></div>
        <Profile6thJun2023 />
        <ImageAndNameAndButton />
        <PersonalInfoAndAbout />
      </div>

      <div className="profile-background-color">
        <div className=" profile-container2"></div>
      </div>
    </>
  );
}
