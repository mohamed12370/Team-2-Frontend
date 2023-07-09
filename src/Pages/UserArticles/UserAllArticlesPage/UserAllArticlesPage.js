import React from 'react';
import './UserAllArticlesPage.css';
import BusinessTobLeftAndRight from '../../../Coponents/UserArticles/UserAllArticles/BusinessTobLeftAndRight';
import Businessbottom from '../../../Coponents/UserArticles/UserAllArticles/Businessbottom';

export default function UserAllArticlesPage() {
  return (
    <>
      <div className="latst-business-background">
        <div className="overlay"></div>
        <BusinessTobLeftAndRight />
        <Businessbottom />
      </div>
    </>
  );
}
