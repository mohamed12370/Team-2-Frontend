import React from 'react';
import './ProfileStyle.css';
import PersonalInfoAndAbout from '../../../Coponents/User/UserProfile/PersonalInfoAndAbout';
import EditeProfile16th from '../../../Coponents/User/EditUserProfile/EditeProfile16th';
import ImageAndNameAndButton from '../../../Coponents/User/EditUserProfile/ImageAndNameAndButton';

export default function UserProfilePage() {
  return (
    <div class="profile-background">
      <div class="profile-overlay">
        <div className="container cont-profile ">
          <EditeProfile16th />
          <ImageAndNameAndButton />
          <PersonalInfoAndAbout />
        </div>
      </div>
    </div>
  );
}
