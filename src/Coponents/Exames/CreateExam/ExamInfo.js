import React from 'react';

function ExamInfo() {
  return (
    <div>
      <section class="exam-info">
        <p class="exam-info-text">exam information</p>
        <form>
          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="validationDefault04" class="form-label">
                course name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                required
              ></input>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02" class="form-label">
                level
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                required
              ></input>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02" class="form-label">
                full mark
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                required
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4     ">
              <label for="validationDefault03" class="form-label">
                date
              </label>
              <input
                type="date"
                class="form-control"
                id="validationDefault03"
                required
              ></input>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault03" class="form-label">
                time
              </label>
              <input
                type="time"
                class="form-control"
                id="validationDefault04"
                required
              ></input>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault05" class="form-label">
                duration
              </label>
              <input
                type="time"
                class="form-control"
                id="validationDefault05"
                required
              ></input>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ExamInfo;
