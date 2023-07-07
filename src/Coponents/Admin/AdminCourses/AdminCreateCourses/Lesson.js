import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashCan } from '@fortawesome/free-solid-svg-icons'
function AddLesson({ id,  onDelete }) {
    return (
        <>
             {/* add Lessons  */}
                
                {/*  lesson1  */}
                <div className="add-lessons mt-2 mb-2  order-2 order-lg-1 col-lg-12">
                    <div className="lesson1 bg-black bg-opacity-25">
                        <div className=" d-flex justify-content-between">
                            <h5>Lesson {id}</h5>
                            <div className="lesson1-icon "><FontAwesomeIcon onClick={onDelete} icon={faTrashCan} /></div>
                        </div>
                        {/*  title  */}
                        <div className="form-outline mt-3">
                            <label className="form-label" for="form10Example1"><p className="mb-0">Title</p></label>
                            <input type="text" id="form10Example1" className="form-control" ></input>
                        </div>
                        {/*  Description  */}
                        <div className="form-outline mt-3">
                            <label className="form-label" for="form10Example1"><p className="mb-0">Description</p></label>
                            <textarea id="form10Example1" className="form-control Description input1" ></textarea>
                        </div>
                        {/*  Lecture Url  */}
                        <div className="form-outline mt-3">
                            <label className="form-label" for="form10Example1"><p className="mb-0">Lecture Url</p></label>
                            <input type="url" id="form10Example1" className="form-control" ></input>
                        </div>
                    </div>
                    </div>
        </>
    )
}

export default AddLesson