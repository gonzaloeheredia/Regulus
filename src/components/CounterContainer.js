import React, { useState } from 'react';
import { Counter } from './Counter';
import { Container } from 'react-bootstrap';
import Products from  '../ProductsList/Products';


const CounterContainer = () => {

    const [stock, setStock] = useState(5);

    const onAdd = ( q ) => {
        if( q <= stock){
            alert(`Has agregado ${q} elementos al carrito.`);
            setStock( stock - q );
        } else {
            alert('No hay suficiente stock.');
        };
    };

    return (
        <Container>
            <Counter initial={ 1 } stock={ stock } onAdd={ onAdd }/>
        </Container>
    );
};

export default CounterContainer