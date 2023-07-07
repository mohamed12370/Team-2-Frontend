import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
function McqQuestion() {
    return (
        <>
            <div className="row">
                <div className="form-group col-md-7 mb-3 position-relative">
                    <div className='d-flex justify-content-between w-100'>
                        <label for="inputEmail4" className="form-label">option</label>
                        <span className=" d-md-none " ><FontAwesomeIcon icon={faTrashCan} className=' ' /></span>
                    </div>
                    <input type="text" className="form-control position-relative" id="inputText2"></input>
                    <button className="correct-button  "> <FontAwesomeIcon icon={faCircleCheck} className='mt-1' /> <span > Correct answer </span></button>
                </div>
                <div className=" col-md-3 mb-3">
                    <label for="inputPassword2" className="form-label "></label>
                    <div className=" d-md-flex d-none justify-content-end justify-content-md-start" ><FontAwesomeIcon icon={faTrashCan} className=' mt-md-3 mt-0' /></div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-7 mb-3 position-relative">
                    <div className='d-flex justify-content-between w-100'>
                        <label for="inputEmail3" className="form-label">option</label>
                        <div className='d-md-none '>
                            <FontAwesomeIcon icon={faTrashCan} className=' me-3 mt-lg-4 mt-0 ' />
                            <FontAwesomeIcon icon={faCirclePlus} className='circle-plus mt-lg-4 mt-0 ' />
                        </div>
                    </div>
                    <input type="text" className="form-control" id="inputText3"></input>
                    <button className="wrong-button "><FontAwesomeIcon icon={faCircleXmark} className='mt-1' /><span className=''> Wrong answer </span></button>
                </div>
                <div className=" col-md-3 can-pluse mb-3 d-none d-md-flex ">
                    <label for="inputPassword4" className="form-label"></label>
                    <FontAwesomeIcon icon={faTrashCan} className=' me-3 mt-md-4 mt-0 ' />
                    <FontAwesomeIcon icon={faCirclePlus} className='circle-plus mt-md-4 mt-0 ' />
                </div>
            </div>
        </>
    )
}

export default McqQuestion