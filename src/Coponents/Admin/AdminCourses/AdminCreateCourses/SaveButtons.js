import React from 'react'

function SaveButtons() {
  return (
    <>
      {/*  save and close  */}
      <div>
        <div class="buttons pb-5 m-0 mt-5 row justify-content-center justify-content-md-end ">
          <button class="btn mt-3 cancel col-12 py-lg-2 col-md-2 me-0 me-lg-3 mx-md-auto mx-lg-0 text-uppercase text-white fw-semibold">cancel</button>
          <button class="btn mt-3 save col-12 py-lg-2 col-md-2 d-none d-md-inline text-uppercase mx-md-auto mx-lg-0 text-white fw-semibold">save</button>
          <button className="btn save col-12 col-md-2 d-inline mt-3 d-md-none text-white text-uppercase fw-semibold">publish</button>
        </div>
      </div>
    </>
  )
}

export default SaveButtons