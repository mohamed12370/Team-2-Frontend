import React from 'react';

function ImageAndNameAndButtonEidtprofile({
  handleSubmit,
  img,
  handleChangeImg,
}) {
  return (
    <div className="row Image-Name-Button-box-Eidtprofile py-4">
      <div className="col-10 ">
        <div className="row">
          <div className=" col-lg-1 col-md-2 col-12 ps-3">
            <img
              src={img}
              alt=""
              width={60}
              height={60}
              className="rounded-pill"
            />
            <label
              htmlFor="edituser-img"
              className="d-block"
              style={{ cursor: 'pointer' }}
            >
              <i class="fa-regular fa-pen-to-square Image-Name-Button-icon1213-Eidtprofile"></i>
            </label>
            <input
              id="edituser-img"
              type="file"
              className="d-none"
              onChange={handleChangeImg}
            />
          </div>
          <div className="col-md-9 col-12 Image-Name-Button-text-Eidtprofile ">
            <h3>Balqees Hamdi Sabir</h3>
            <p>Computer science, international islamic university</p>
          </div>
        </div>
      </div>
      <div className="col-2  cleacrfix">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn float-end  Image-Name-Button-button-Eidtprofile"
        >
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
}

export default ImageAndNameAndButtonEidtprofile;
