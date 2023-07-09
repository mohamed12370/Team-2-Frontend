import React from 'react'

function Subscribe() {
    return (
        <>
            {/*  subscribe  */}
            <div className="subscribe-article-detials row m-0 justify-content-center text-center ">
                <div className="col-12">
                    <h2 className="text-uppercase">subscribe to our newsletter </h2>
                    <p>Be the first to get the latest news</p>
                </div>
                <div className="row justify-content-center mt-3 ">
                    <input type="text" className="col-lg-4 col-12 mb-3 mb-lg-0 p-2  rounded rounded-end-0 rone  input-subscribe" placeholder="Enter your email address"></input>
                    <button type="submit" className="btn btn-subscribe rounded rounded-start-0  col-lg-2 col-12 text-uppercase ">Subscribe</button>
                </div>

            </div>

        </>
    )
}

export default Subscribe