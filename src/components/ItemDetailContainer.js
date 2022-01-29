import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetails from './ItemDetail'
import Products from './ProductsList/Products';


const ItemDetailContainer = () => {

  const  [itemsDetails, getItems]= useState([])

  useEffect(()=>{
        new Promise ((resolved, rejected) => {
          setTimeout( () => { 
              resolved(Products)
          },  1000)
        }
        ).then(
            (resultado) => {getItems(resultado)}
        );
      }, []
  );

  return (
    <Container>
      <ItemDetails item = {itemsDetails}/>
    </Container>
  );
}

export default ItemDetailContainer