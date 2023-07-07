import React from 'react';

export default function AdminUpdateArticle() {
  return (
    <>
      <div className="col-lg-9 article-form">
        <div className="row d-flex justify-content-between">
          <div className="col-6">
            <h3 className="text-light title text-capitalize">
              update article details
            </h3>
            <hr className="add-hr" />
          </div>
          <div className="col-6 publish-main-btn">
            <button className="text-light px-4 py-2 text-uppercase border-0 rounded-3">
              publish
            </button>
          </div>
        </div>
        <div className="row">
          <form className="row">
            {/* <!-- Start div for drag file which appears only for mobile and tablets --> */}
            <div className="mb-3 drag-for-mobile">
              <label className="form-label py-2 text-light text-capitalize">
                upload cover photo
              </label>
              <div className="drag">
                <div className="input-div my-1 mx-auto">
                  <input
                    className="input form-control dark-inputs"
                    name="file"
                    type="file"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    className="icon"
                  >
                    <polyline points="16 16 12 12 8 16"></polyline>
                    <line y2="21" x2="12" y1="12" x1="12"></line>
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                    <polyline points="16 16 12 12 8 16"></polyline>
                  </svg>
                </div>
                <p className="drag-text text-light text-capitalize mt-1 text-center fw-bold fs-6">
                  drag & drop files or <a href="#/">Browse</a>
                </p>
                <p className="formats text-center fs-6">
                  supported files: JPEG,PNG,GIF,MP4,PSD,AI,Word,PPT{' '}
                </p>
              </div>
            </div>
            {/* <!-- End div for drag file which appears only for mobile and tablets --> */}
            <div className="col-md-6">
              <label className="form-label py-2 text-light text-capitalize">
                article title
              </label>
              <input type="text" className="form-control dark-inputs" />
            </div>
            <div className="col-md-6">
              <label className="form-label py-2 text-light text-capitalize">
                category
              </label>
              <select
                className="form-select"
                aria-label="Default select example dark-inputs"
              >
                <option selected> </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label py-2 text-light text-capitalize">
                content
              </label>
              <input
                type="text"
                className="form-control content-input dark-inputs"
              />
            </div>
            <div className="mb-3">
              <label className="form-label py-2 text-light text-capitalize">
                publishing date
              </label>
              <input
                type="date"
                className="form-control .d-flex flex-row-reverse dark-inputs"
              />
            </div>
            {/* <!-- Start div for drag file which appears only for Large Screens --> */}
            <div className="mb-3 drag-for-large-screens">
              <label className="form-label py-2 text-light text-capitalize">
                upload cover photo
              </label>
              <div className="drag">
                <div className="input-div my-1 mx-auto">
                  <input
                    className="input form-control dark-inputs"
                    name="file"
                    type="file"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    className="icon"
                  >
                    <polyline points="16 16 12 12 8 16"></polyline>
                    <line y2="21" x2="12" y1="12" x1="12"></line>
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                    <polyline points="16 16 12 12 8 16"></polyline>
                  </svg>
                </div>
                <p className="drag-text text-light text-capitalize mt-1 text-center fw-bold">
                  drag & drop files or <a href="#/">Browse</a>
                </p>
                <p className="formats text-center">
                  supported files: JPEG,PNG,GIF,MP4,PSD,AI,Word,PPT{' '}
                </p>
              </div>
            </div>
            {/* <!-- End div for drag file which appears only for Large Screens --> */}
            {/* <!-- Start last buttons --> */}
            <div className="form-buttons">
              <button className="cancel">cancel</button>
              <button className="save">save</button>
              {/* <!-- button appears only for mobiles and tablets--> */}
              <button className="publish-btn">publish</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
