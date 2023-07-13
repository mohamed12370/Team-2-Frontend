import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
function WrittenQuestion({WrittenAnswer ,handleWrittenAnswerChange }) {
    return (
        <>
            <div className="row">
                <div className="form-group col-md-12 mb-3 position-relative">
                    <label for="inputEmail5" className="form-label">answer</label>
                    <input type="text" className="form-control" id="inputText6"required value={WrittenAnswer} onChange={handleWrittenAnswerChange} ></input>
                    <button className="correct-button "> <FontAwesomeIcon icon={faCircleCheck} className='mt-1' /> <span className=''> Correct answer </span></button>
                </div>
                <div className=" col-md-3" id="undefined">
                    <label></label>
                </div>
            </div>

        </>
    )
}

export default WrittenQuestion