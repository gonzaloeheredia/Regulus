import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from './ProductsList/Products';
import ItemsList from './ItemList';


const ItemsListContainer = () =>  {

  const  [items, setItems]= useState([])

      useEffect(()=>{
        new Promise ((resolved, rejected) => {

          setTimeout( () => (
            resolved(
              <Products/>
            )
          ), 2000)
        }
        ).then((resultado) => {setItems(resultado)});
      }, []
  );

  return (
    <Container>
      <Row>
        <Col> 
            <ItemsList item = {items}/>
        </Col>
      </Row>
    </Container>
  );
}

 
export default ItemsListContainer;
