import React from 'react';
function ExamInfo({courseName, level , fullMark , date , time , duration,
  handleCourseNameChange, handleTimeChange , handleFullMarkChange, handleLevelChange, handleDateChange , handleDurationChange }) {
  return (
    <div>
      <section className="exam-info">
        <p className="exam-info-text">exam information</p>
        <form>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label for="validationDefault04" className="form-label">
                course name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                required
                onChange={handleCourseNameChange}
                value={courseName}
              ></input>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02" className="form-label">
                level
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                required
                onChange={handleLevelChange}
                value={level}

              ></input>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02" className="form-label">
                full mark
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
                onChange={handleFullMarkChange}
                value={fullMark}

              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4     ">
              <label for="validationDefault03" className="form-label">
                date
              </label>
              <input
                type="date"
                className="form-control"
                id="validationDefault03"
                required
                onChange={handleDateChange}
                value={date}
              ></input>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault03" className="form-label">
                time
              </label>
              <input
                type="time"
                className="form-control"
                id="validationDefault04"
                required
                onChange={handleTimeChange}
                value={time}
              ></input>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault05" className="form-label">
                duration
              </label>
              <input
                type="time"
                className="form-control"
                id="validationDefault05"
                required
                onChange={handleDurationChange}
                value={duration}
              ></input>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ExamInfo;
