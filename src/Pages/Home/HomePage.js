import React from 'react';
import './style.css';
import FeatureNewsTechRightAndLeft from '../../Coponents/Home/FeatureNewsTechRightAndLeft';
import EducationAndTechAndSports from '../../Coponents/Home/EducationAndTechAndSports';
import FooterHome from '../../Coponents/Home/FooterHome';

export default function HomePage() {
  return (
    <>
      <div className="home-background position-relative">
        <div className="home-overlay">
          <FeatureNewsTechRightAndLeft />
          <EducationAndTechAndSports />
        </div>
      </div>
      <FooterHome />
    </>
  );
}
