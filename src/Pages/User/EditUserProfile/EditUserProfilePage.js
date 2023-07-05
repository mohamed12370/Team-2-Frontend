import React from 'react';
//import './EditProfileStyle.css';
import EditeProfile16th from '../../../Coponents/User/EditUserProfile/EditeProfile16th';
import ImageAndNameAndButton from '../../../Coponents/User/EditUserProfile/ImageAndNameAndButton';
import PersonalInfoAndAbout from '../../../Coponents/User/EditUserProfile/PersonalInfoAndAbout';

export default function EditUserProfilePage() {
  return (
    <>
      <div>
        <div class="overlay"></div>
        <div class="container0 ">
          <EditeProfile16th />
          <ImageAndNameAndButton />
          <PersonalInfoAndAbout />
        </div>
      </div>
    </>
  );
}
