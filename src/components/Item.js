import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Counter from './Counter';



const Item = (props) => {

  const [stock, onAdd] = useState(5); 
  const add = () => {
    onAdd(console.log('Agregaste tu compra al carrito'))
 }

    
return(
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                    {props.type}
            </Card.Text>
            <Card.Text>
                   <h2> Price {props.usd}</h2> 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Counter stock={stock} initial={1} add={add} />
       </Card>
    </>
  )
}

export default Item;