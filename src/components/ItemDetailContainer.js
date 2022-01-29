import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail'
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
            (res) => {getItems(res)}
        );
      }, []
  );

  return (
    <Container>
      <ItemDetail item={itemsDetails}/>
    </Container>
  );
}

export default ItemDetailContainer