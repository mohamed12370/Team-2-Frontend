import React, { useState } from 'react';
import './EditProfileStyle.css';
import EidtProfile6thJun2023 from '../../../Coponents/User/EditUserProfile/EidtProfile6thJun2023';
import ImageAndNameAndButtonEidtprofile from '../../../Coponents/User/EditUserProfile/ImageAndNameAndButtonEidtprofile';
import PersonalInfoAndAboutEditprofile from '../../../Coponents/User/EditUserProfile/PersonalInfoAndAboutEditprofile';

export default function EditUserProfilePage() {
  // state object form
  const [editorofileAbout, setEditorofileAbout] = useState();
  const [editorofileEmail, setEditorofileEmai] = useState();
  const [editorofileMobileNumber, setEditorofileMobileNumber] = useState();
  const [editorofileUniversity, setEditorofileUniversity] = useState();
  const [editorofileMajor, setEditorofileMajor] = useState();
  const [editorofileGraduationyear, setEditorofileGraduationyear] = useState();
  const [editorofileAge, setEditorofileAge] = useState();
  const [editorofileNationality, setEditorofileNationality] = useState();
  const [editorofileCountry, setEditorofileCountry] = useState();
  const [editorofileCity, setEditorofileCity] = useState();
  const [img, setImg] = useState();
  const [selectedImg, setSelectedImg] = useState();

  const handleChangeImg = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    setSelectedImg(e.target.files[0]);
  };

  // handle state change
  const handleEditorofileAbout = (e) => {
    setEditorofileAbout(e.target.value);
  };
  const handleEditorofileEmail = (e) => {
    setEditorofileEmai(e.target.value);
  };
  const handleEditorofileMobileNumber = (e) => {
    setEditorofileMobileNumber(e.target.value);
  };
  const handleEditorofileUniversity = (e) => {
    setEditorofileUniversity(e.target.value);
  };
  const handleEditorofileMajor = (e) => {
    setEditorofileMajor(e.target.value);
  };
  const handleEditorofileGraduationyear = (e) => {
    setEditorofileGraduationyear(e.target.value);
  };
  const handleEditorofileAge = (e) => {
    setEditorofileAge(e.target.value);
  };
  const handleEditorofileNationality = (e) => {
    setEditorofileNationality(e.target.value);
  };
  const handleEditorofileCountry = (e) => {
    setEditorofileCountry(e.target.value);
  };
  const handleEditorofileCity = (e) => {
    setEditorofileCity(e.target.value);
  };

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      editorofileAbout === '' ||
      editorofileEmail === '' ||
      editorofileMobileNumber === '' ||
      editorofileGraduationyear === ' ' ||
      editorofileUniversity === '' ||
      editorofileMajor === '' ||
      editorofileAge === '' ||
      editorofileCity === '' ||
      editorofileCountry === ''
    ) {
      //alert("Please fill all the fields");
      return;
    } else {
      const profileData = new FormData();
      profileData.append('newUserImg', selectedImg);
      profileData.append('about', editorofileAbout);
      profileData.append('email', editorofileEmail);
      profileData.append('mobileNumber', editorofileMobileNumber);
      profileData.append('university', editorofileUniversity);
      profileData.append('major', editorofileMajor);
      profileData.append('graduationyear', editorofileGraduationyear);
      profileData.append('age', editorofileAge);
      profileData.append('nationality', editorofileNationality);
      profileData.append('country', editorofileCountry);
      profileData.append('city', editorofileCity);
      console.log(profileData);
    }
  };

  return (
    <>
      <div className="edit-profile-container ">
        <div className="edit-profile-overlayOnImage"></div>
        <EidtProfile6thJun2023 />
        <ImageAndNameAndButtonEidtprofile
          handleSubmit={handleSubmit}
          handleChangeImg={handleChangeImg}
          img={img}
        />
        <PersonalInfoAndAboutEditprofile
          editorofileAbout={editorofileAbout}
          handleEditorofileAbout={handleEditorofileAbout}
          editorofileEmail={editorofileEmail}
          handleEditorofileEmail={handleEditorofileEmail}
          editorofileMobileNumber={editorofileMobileNumber}
          handleEditorofileMobileNumber={handleEditorofileMobileNumber}
          editorofileUniversity={editorofileUniversity}
          handleEditorofileUniversity={handleEditorofileUniversity}
          editorofileMajor={editorofileMajor}
          handleEditorofileMajor={handleEditorofileMajor}
          editorofileGraduationyear={editorofileGraduationyear}
          handleEditorofileGraduationyear={handleEditorofileGraduationyear}
          editorofileAge={editorofileAge}
          handleEditorofileAge={handleEditorofileAge}
          editorofileNationality={editorofileNationality}
          handleEditorofileNationality={handleEditorofileNationality}
          editorofileCountry={editorofileCountry}
          handleEditorofileCountry={handleEditorofileCountry}
          editorofileCity={editorofileCity}
          handleEditorofileCity={handleEditorofileCity}
        />
      </div>
    </>
  );
}
