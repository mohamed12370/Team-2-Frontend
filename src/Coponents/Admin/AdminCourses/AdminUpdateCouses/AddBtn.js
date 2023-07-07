import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddBtn({onAdd}) {
    return (
        <>
            {/*  add-lesson   */}
            <div className="add-lesson p-0 p-md-3 col-4 d-flex justify-content-lg-between  justify-content-end   order-1 order-lg-2 col-lg-2">
                <h6 className='me-2 me-lg-0'>Add Lesson</h6>
                <FontAwesomeIcon onClick={onAdd} icon={faPlus} />
            </div>

        </>
    )
}

export default AddBtn