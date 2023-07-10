import React from 'react';
import './EditProfileStyle.css';
import EidtProfile6thJun2023 from '../../../Coponents/User/EditUserProfile/EidtProfile6thJun2023';
import ImageAndNameAndButtonEidtprofile from '../../../Coponents/User/EditUserProfile/ImageAndNameAndButtonEidtprofile';
import PersonalInfoAndAboutEditprofile from '../../../Coponents/User/EditUserProfile/PersonalInfoAndAboutEditprofile';

export default function EditUserProfilePage() {
  return (
    <>
      <div className="edit-profile-container ">
        <div className="edit-profile-overlayOnImage"></div>
        <EidtProfile6thJun2023 />
        <ImageAndNameAndButtonEidtprofile />
        <PersonalInfoAndAboutEditprofile />
      </div>
    </>
  );
}
