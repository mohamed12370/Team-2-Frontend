import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TableArticleCard({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteArticle = async () => {
    console.log('write your function deleted here');
    handleClose();
  };

  return (
    <div className="row table-container">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> are you sure from delete this article </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDeleteArticle}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <div className="d-lg-none col-6 name">Title</div>
      <div className=" col-lg-2 col-12 upper name-text">{item?.title}</div>
      <div className="col-lg-3 col-6 text-center status">
        {item?.status === 'puplish' ? (
          <button
            className="active py-2 px-3"
            style={{ backgroundColor: '#bf9b30' }}
          >
            {item?.status}
          </button>
        ) : (
          <button className="notActive w-100">{item?.status}</button>
        )}
      </div>
      <div className="d-lg-none col-6 user">Category</div>
      <div className="col-lg-2 col-6 text-center email">{item?.category}</div>
      <div className="d-lg-none col-6 role">Date&Time</div>
      <div className="col-lg-3 col-6 text-center user-id">{item?.dateTime}</div>
      <div className="col-lg-2 col-12 d-flex justify-content-end email-name">
        <Link to={`/adminupdatearticle/:id`}>
          <i className="far fa-edit edit"></i>
        </Link>
        <i className="far fa-trash-alt delete ms-2" onClick={handleShow}></i>
      </div>
    </div>
  );
}
