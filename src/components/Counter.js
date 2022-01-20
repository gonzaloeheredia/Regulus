
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

let Counter =() => {

const [count, setCount] = useState(0)

const handlerCount = () => setCount(count+ 1)

   (    <Container>
            {count}
            <Button variant="light" onClick={handlerCount}>More</Button>
        </Container>    
    )
}

export default Counter