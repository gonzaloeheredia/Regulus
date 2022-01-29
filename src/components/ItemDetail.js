import React from 'react';
import {Container} from 'react-bootstrap';

const ItemDetail = (prop) => {

  return (
    <>
      <Container>
        <h2> Name: {prop.item.name}</h2>
        <p> Description: {prop.item.description}</p>
      </Container>
    </>
  );
}


export default ItemDetail;