import React from 'react';

const CourseContent = () => {
  return (
    <>
      <div className="col-lg-8 col-12 text-white order-2 order-lg-1 mb-5 pb-5">
        <div className="mt-5 d-none d-lg-block intro-1">
          <h6 className="header-section">introduction</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            in similique vero voluptatibus quis vel, fugit eius maxime repellat
            a enim officia consequuntur, corporis blanditiis, beatae aliquid
            minus suscipit. Tempora Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Impedit dolor tempore tenetur, vitae doloremque id
            eius? Quae, itaque iure mollitia ipsa quia quisquam eaque deserunt
            dolorum cum numquam asperiores consequatur.
          </p>
        </div>
        <p className="mt-4 header-section">Lessons</p>

        <div
          className="accordion m-lg-75 mt-4 p-2 accordion-section "
          id="accordionExample"
          style={{ width: '85%' }}
        >
          <div className="accordion-item text-white bg-black mt-2 icon-introduction div-accordion">
            <h2
              className="accordion-header text-white d-flex justify-content-between p-3"
              id="headingOne"
            >
              <p>introduction to python</p>
              <i
                className="fa-solid fa-plus  accordion-button  p-0 i-accordion"
                id="rotate"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              ></i>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci nam magnam ut deleniti recusandae earum fugiat omnis
                  accusantium illo repudiandae quae vitae perferendis, itaque
                  quas repellat ratione praesentium minima cum?.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item text-white bg-black mt-2 div-accordion">
            <h2
              className="accordion-header text-white d-flex justify-content-between p-3"
              id="headingOne"
            >
              <p>Function</p>
              <i
                className="fa-solid fa-plus accordion-button collapsed p-0 i-accordion"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              ></i>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis, reiciendis a. Sit culpa, facere quasi qui cumque
                  doloribus iusto, tempora velit beatae excepturi, repellendus
                  eligendi ex architecto minus ab sequi..
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item text-white bg-black mt-2 div-accordion">
            <h2
              className="accordion-header text-white d-flex justify-content-between p-3"
              id="headingOne"
            >
              <p>Arrays</p>
              <i
                className="fa-solid fa-plus accordion-button collapsed p-0 i-accordion"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              ></i>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci nam magnam ut deleniti recusandae earum fugiat omnis
                  accusantium illo repudiandae quae vitae perferendis, itaque
                  quas repellat ratione praesentium minima cum?.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
