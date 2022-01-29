import React, { useState } from 'react';
import CounterContainer from './CounterContainer';
import {Modal, Card, Button} from 'react-bootstrap';
import ItemDetailContainer from './ItemDetailContainer';

const Item = (props) => {
   
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);


return(
      <>
            <Card style={{ width: '20rem', height:'32rem', marginTop: '2.5cm', marginRight:'0.2cm' , paddingTop:'0.4cm', paddingLeft: '0.5cm', paddingRight: '0.5cm'}} border="dark">
              <Card.Title className='tittleClass'>{props.props.name}</Card.Title>
              <Card.Img style={{ width: '15rem', height:'15rem'}} src={props.props.imgUrl} />
              <Card.Body>
                  <Card.Text>
                        <p className='price'> Price: USD {props.props.usd}</p> 
                  </Card.Text>
                  <CounterContainer/>
                  <Modal show={show} onHide={handleClose}>
                    <ItemDetailContainer/>
                  </Modal>
                  <Button variant="outline-success" onClick={handleShow}> Click for details </Button>
               </Card.Body>
            </Card>
      </>
  )
}

export default Item;