import React from 'react';
import './style.css';
import FeatureNewsTechRightAndLeft from '../../Coponents/Home/FeatureNewsTechRightAndLeft';
import EducationAndTechAndSports from '../../Coponents/Home/EducationAndTechAndSports';

export default function HomePage() {
  return (
    <>
      <div className="overlay"></div>
      <div className="home-background position-relative">
        <FeatureNewsTechRightAndLeft />
        <EducationAndTechAndSports />
      </div>
    </>
  );
}
