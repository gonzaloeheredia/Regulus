import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

export const Counter = ({ initial = 1, stock, onAdd }) => {

    const [counter, setCounter] = useState( initial );

    const handleAdd = () => {
        if ( counter < stock ) {
            setCounter( counter + 1 );
        };
    };

    const handleSubstract = () => {
        if ( counter > 1) {
            setCounter( counter - 1 );
        };
    };

    return (
        <Container className='counter'>
            <p className='stockClass'> Stock: { stock }</p>
            <Button variant="light" onClick={ handleSubstract }>  - </Button>
            <input value={ counter }  className='inputSize'/>
            <Button variant="light" onClick={ handleAdd }> + </Button>
            <Container>
                <Button variant="secondary" size="lg"  onClick={ () => onAdd( counter ) }>Buy </Button>
            </Container>
        </Container>
    )
}