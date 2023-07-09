import React from 'react';
import './ShowUserArticlePage.css';
import TitleArticle from '../../../Coponents/UserArticles/UserArticleDetails/TitleArticle';
import CardArticleDetails from '../../../Coponents/UserArticles/UserArticleDetails/CardArticleDetails';
import Subscribe from '../../../Coponents/UserArticles/UserArticleDetails/Subscribe';
import BackToTopButton from '../../../Coponents/UserArticles/UserArticleDetails/ReturnTopBtn';

export default function ShowUserArticleDetailsPage() {
  return (
    <>
      <section className="bg-article-detials">
        <div className="overlay-article-detials text-light">
          <div className="container  ">
            <TitleArticle />
            <CardArticleDetails />
            <Subscribe />
            <BackToTopButton />
          </div>
        </div>
      </section>
    </>
  );
}
