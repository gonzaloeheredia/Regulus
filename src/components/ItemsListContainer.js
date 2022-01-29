import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Products from './ProductsList/Products';
import ItemsList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemsListContainer = () =>  {

  const {category} = useParams()

  const  [items, setItems]= useState([])

  useEffect(() => {
    new Promise((resolved, rejected) => {
      setTimeout(() => {
        if (category) {
          resolved(Products.filter((p) => p.category === Products.category));
        } else {
          resolved(Products);
        }
      }, 2000);
    }).then((res) => {
      setItems(res);
    });
  }, [category]);

  return (
    <Container>
        <ItemsList item = {items}/> 
    </Container>
  );
}

 
export default ItemsListContainer;
