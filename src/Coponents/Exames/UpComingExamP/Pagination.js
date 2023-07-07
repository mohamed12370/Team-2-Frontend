import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
function Pagination() {
    return (
        <>
            <div className="d-lg-flex justify-content-end d-none ">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </li>
                        <li className="page-item "><a className="page-link " href="/#">1</a></li>
                        <li className="page-item "><a className="page-link" href="/#">2</a></li>
                        <li className="page-item "><a className="page-link" href="/#">3</a></li>
                        <li className="page-item "><a className="page-link" href="/#">...</a></li>
                        <li className="page-item">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Pagination
