import React from 'react';
import {Modal} from 'react-bootstrap';

const ItemDetail = (props) => {

  return (
    <>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.item.description}</Modal.Body>
        
    </>
  );
}


export default ItemDetail;