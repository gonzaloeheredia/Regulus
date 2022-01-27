import Card from 'react-bootstrap/Card';
import CounterContainer from './CounterContainer';
import Details from './Details.js';


const Item = (props) => {
   
return(
      <>
            <Card style={{ width: '20rem', height:'32rem', marginTop: '2.5cm', marginRight:'0.2cm' , paddingTop:'0.4cm', paddingLeft: '0.5cm', paddingRight: '0.5cm'}} border="dark">
              <Card.Title className='tittleClass'>{props.props.name}</Card.Title>
              <Details/>
              <Card.Img style={{ width: '15rem', height:'15rem'}} src={props.props.imgUrl} />
              <Card.Body>
                  <Card.Text>
                        <p className='price'> Price: USD {props.props.usd}</p> 
                  </Card.Text>
                  <CounterContainer/>
               </Card.Body>
            </Card>
      </>
  )
}

export default Item;