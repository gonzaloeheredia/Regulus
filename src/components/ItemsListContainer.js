import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Products from './ProductsList/Products';
import ItemsList from './ItemList';


const ItemsListContainer = () =>  {

  const  [items, setItems]= useState([])

      useEffect(()=>{
        new Promise ((resolved, rejected) => {

          setTimeout( () => (
            resolved(
              Products
            )
          ), 2000)
        }
        ).then((resultado) => {setItems(resultado)})
        .catch(err => console.log(err))
        .finally((fin)=> console.log(fin))
        
      }, []

  );

  return (
    <Container>
        <ItemsList item = {items}/> 
    </Container>
  );
}

 
export default ItemsListContainer;
