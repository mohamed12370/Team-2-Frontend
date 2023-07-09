import React from 'react';
import ArticleImg from '../../../Images/business.jpg';

function CardArticleDetails() {
  return (
    <>
      {/*  card article-detials */}
      <div className="card-article-detials row m-0 mt-5 ">
        {/*  image article-detials  */}
        <div classNameName="col-12">
          <img
            className="w-100  "
            src={ArticleImg}
            alt="article-detials-img"
          ></img>
        </div>
        {/*  text article-detials  */}
        <div className="mt-5 text-article-detials text-capitalize">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            labore laudantiumratione nihil voluptatibus quaerat sint consequatur
            esse minus modi quis earum magni incidunt provident Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dolore, labore
            laudantiumratione nihil voluptatibus quaerat sint consequatur esse
            minus modi quis earum magni incidunt provident nihil
            voluptatibusnihil voluptatibus quaerat sintoptio quam tenetur iure
            blanditiis!
          </p>
          <p className="d-lg-none d-block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            labore laudanti nihil voluptatibus quaerat sint consequatur esse
            minus modi quis earum magni incidunt provident Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Dolore, labore
            laudantiumratione
          </p>
          <p className="d-none d-lg-block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            labore laudan nihil voluptatibus quaerat sint consequatur esse minus
            modi quis earum magni incidunt provident Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolore, labore laudanti Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dolore, labore Lorem
            ipsum,. Dolore, labore Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolore, labore laudant Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolore, labore Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Dolore, labore Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Dolore, labore Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dolore, labore
            laudantiu nihil voluptatibus quaerat sint consequatur esse minus
            modi quis earum magni incidunt provident tenetur iure blanditiis!
          </p>
        </div>
      </div>
    </>
  );
}
export default CardArticleDetails;
