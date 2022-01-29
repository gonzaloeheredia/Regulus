import React from 'react';
import CounterContainer from './CounterContainer';
import {Card, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Products from './ProductsList/Products';

const Item = (props) => {
   
      return(
      <>
            <Card style={{ width: '20rem', height:'33rem', marginTop: '2.5cm', marginRight:'0.2cm' , paddingTop:'0.4cm', paddingLeft: '0.5cm', paddingRight: '0.5cm'}} border="dark">
              <Card.Title className='tittleClass'>{props.props.name}</Card.Title>
              <Card.Img style={{ width: '15rem', height:'15rem'}} src={props.props.imgUrl} />
              <Card.Body>
                  <Card.Text>
                        <p className='price'> Price: USD {props.props.usd}</p> 
                  </Card.Text>
                  <CounterContainer/>
                  <NavLink to={`/detalle/${props.props.id}`}>  
                        <Button variant="outline-success"> Click for details </Button>
                  </NavLink>
               </Card.Body>
            </Card>
      </>
  )
}

export default Item;