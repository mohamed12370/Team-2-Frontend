import React from 'react';
import './style.css';
import HeaderHome from '../../Coponents/Home/Header';
import FeatureNewsTechRightAndLeft from '../../Coponents/Home/FeatureNewsTechRightAndLeft';
import EducationAndTechAndSports from '../../Coponents/Home/EducationAndTechAndSports';

export default function HomePage() {
  return (
    <>
      <div className="home-background position-relative">
        <div className="home-overlay">
          <FeatureNewsTechRightAndLeft />
          <EducationAndTechAndSports />
        </div>
      </div>
    </>
  );
}
