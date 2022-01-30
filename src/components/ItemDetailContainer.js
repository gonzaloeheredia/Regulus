import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import Products from './ProductsList/Products';


const ItemDetailContainer = () => {

  const  [itemsDetails, getItems]= useState([])
  const  {id} = useParams()

  useEffect(()=>{
        new Promise ((resolved, rejected) => {
          setTimeout( () => { 
            if (category) {
              resolved(Products.find((p) => p.category === Products.id));
            } else {
              resolved(Products);
            }
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