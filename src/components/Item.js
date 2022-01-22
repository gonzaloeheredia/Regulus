import Card from 'react-bootstrap/Card';
import CounterContainer from './CounterContainer';



const Item = (props) => {
   
return(
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Title>{props.props.name}</Card.Title>
            <Card.Img variant="top" src={props.props.imgUrl} />
            <Card.Body>
            <Card.Text>
                   <h2> Price {props.props.usd}</h2> 
            </Card.Text>
            </Card.Body>
            <CounterContainer/>
       </Card>
    </>
  )
}

export default Item;