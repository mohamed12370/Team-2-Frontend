import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck , faCircleXmark ,faCirclePlus ,faTrashCan } from '@fortawesome/free-solid-svg-icons'
function AddQuestion() {
  return (
    <>
        <p class="question">questions</p>
        <div class="row question-form">
        <div class="col-lg-10 form-info">
            <form>
                <div class="row">
                    <div class="form-group col-md-8 mb-3">
                        <label for="inputEmail4"class="form-label">question 1</label>
                        <input type="text" class="form-control" id="inputText0"></input>
                    </div>
                    <div class="form-group col-md-4 mb-3">
                        <label for="inputPassword4"class="form-label">mark</label>
                        <input type="text" class="form-control" id="inputText1"></input>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-5 mb-3">
                        <label for="inputEmail4"class="form-label">question type</label>
                        <select class="form-select form-select-sm" id="sec-select" aria-label=".form-select-sm example">
                            <option value="3" selected> multiple choice</option>
                            <option value="4"></option>
                            <option value="5"></option>
                        </select>
                    </div>
                    <div class="form-group col-md-7 mb-3 position-relative">
                        <label for="inputPassword4"class="form-label">image upload</label>
                        <input type="file" class="form-control" id="inputfile4"></input>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down"
                            viewBox="0 0 16 16" id="svg">
                            <path fill-rule="evenodd"
                            d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
                            <path
                            d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-7 mb-3 position-relative">
                        <div className='d-flex justify-content-between w-100'>
                            <label for="inputEmail4"class="form-label">option</label>
                            <span class=" d-md-none " ><FontAwesomeIcon icon={faTrashCan} className=' '/></span>
                        </div>
                        <input type="text" class="form-control " id="inputText2"></input>
                        <button class="correct-button  "> <FontAwesomeIcon icon={faCircleCheck} className='mt-1' /> <span className=''> Correct answer </span></button>
                    </div>
                    <div class=" col-md-3 mb-3">
                        <label for="inputPassword2"class="form-label "></label>
                        <div class=" d-md-flex d-none justify-content-end justify-content-md-start" ><FontAwesomeIcon icon={faTrashCan} className=' mt-md-3 mt-0' /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-7 mb-3 position-relative">
                        <div className='d-flex justify-content-between w-100'>
                            <label for="inputEmail3"class="form-label">option</label>
                            <div className='d-md-none '>
                            <FontAwesomeIcon icon={faTrashCan} className=' me-3 mt-lg-4 mt-0 ' />
                            <FontAwesomeIcon icon={faCirclePlus} className='circle-plus mt-lg-4 mt-0 ' />
                            </div>
                        </div>
                        <input type="text" class="form-control" id="inputText3"></input>
                        <button class="wrong-button "><FontAwesomeIcon icon={faCircleXmark} className='mt-1' /><span className=''> Wrong answer </span></button>
                    </div>
                    <div class=" col-md-3 can-pluse mb-3 d-none d-md-flex ">
                        <label for="inputPassword4"class="form-label"></label>
                        <FontAwesomeIcon icon={faTrashCan} className=' me-3 mt-md-4 mt-0 ' />
                        <FontAwesomeIcon icon={faCirclePlus} className='circle-plus mt-md-4 mt-0 ' />
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-2"><i class="fa-regular fa-trash-can del-quistion "></i></div>
        </div>
        <div class="row question-form">
        <div class="col-md-10 form-info">
            <form>
                <div class="row">
                    <div class="form-group col-md-8 mb-3">
                        <label for="inputEmail4"class="form-label">question 2</label>
                        <input type="text" class="form-control" id="inputText4"></input>
                    </div>
                    <div class="form-group col-md-4 mb-3">
                        <label for="inputText5"class="form-label">mark</label>
                        <input type="text" class="form-control" id="inputText5"></input>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-5 mb-3">
                        <label for="inputEmail5"class="form-label">question type</label>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="third-select">
                                <option value="10" selected>short answer</option>
                                <option value="11"></option>
                                <option value="12"></option>
                            </select> </div>
                    <div class="form-group col-md-7 mb-3 position-relative">
                        <label for="inputfile"class="form-label">image upload</label>
                        <input type="file" class="form-control" id="inputfile6"></input>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-cloud-arrow-down" viewBox="0 0 16 16" id="svg2">
                            <path fill-rule="evenodd"
                                    d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
                            <path
                                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12 mb-3 position-relative">
                        <label for="inputEmail5"class="form-label">answer</label>
                        <input type="text" class="form-control" id="inputText6"></input>
                        <button class="correct-button "> <FontAwesomeIcon icon={faCircleCheck} className='mt-1' /> <span className=''> Correct answer </span></button>
                    </div>
                    <div class=" col-md-3" id="undefined">
                        <label></label>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-2 add-question">add question <FontAwesomeIcon icon={faCirclePlus} className='circle-plus'/></div>
        </div>
    </>
  )
}

export default AddQuestion