
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

let Counter =() => {

const [count, setCount] = useState(0)

const handlerCount = () => setCount(count+ 1)

   (    <Container>
            <h2>{count}</h2>
            <Button variant="light" onClick={handlerCount}>More</Button>
        </Container>    
    )
}

export default Counter