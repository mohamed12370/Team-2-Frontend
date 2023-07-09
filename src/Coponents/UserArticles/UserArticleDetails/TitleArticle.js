import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function TitleArticle() {
    return (
        <>
            {/*  title article-detials  */}
            <div className="title-article-detials row mx-2 justify-content-between align-items-lg-end">
                <div className="article-detials-hvr col-lg-12 col-6  pt-5 mx-2 mx-lg-0">
                    <p className="text-capitalize">business</p>
                    <div className="line-hvr"></div>
                </div>
                <h2 className="mt-3 order-1 order-lg-0 text-uppercase fw-semibold fs-2 col-12 col-lg-10 title-article-details">here's the fourth article</h2>
                <div className="col-lg-2 col-5 order-0 order-lg-1 d-flex justify-content-end align-items-end align-items-lg-center">
                    <FontAwesomeIcon icon={faClock} classNameName='d-block mb-1' />
                    <p className="ms-2  mb-0">2h ago</p>
                </div>
            </div>

        </>
    )
}

export default TitleArticle