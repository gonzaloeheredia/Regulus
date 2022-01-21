
import Button from 'react-bootstrap/Button'

export default function Counter( {stock, initial, add}) {
     

       
  const  buyMore = (e, nuevoStock) => {
      e.preventDefault();
      setStockActual((stock) => stock - nuevoStock);
    }

    const  devolution = (e, nuevoStock) => {
        e.preventDefault();
        devolverStock((stock) => stock + nuevoStock);   
    }   
      
    


    <div>
        <input placeholder={initial}>{stock}</input>
        <Button variant="light" onClick= { stock > 0 ? ((e) => buyMore(e, 1)) : ((e) => e.preventDefault())}>+</Button>
        <Button variant="danger" onClick={add}>Add to Cart</Button>   
        <Button variant="light" onClick= { stock <= 5 ? ((e) => devolution(e, 1)) : ((e) => e.preventDefault())}>-</Button>
    </div>
}