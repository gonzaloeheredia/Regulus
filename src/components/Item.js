import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Item = (props) => {

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
       </Card>
    </>
  )
}

export default Item;