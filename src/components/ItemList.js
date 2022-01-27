import React from 'react';
import Item from './Item';
import { CardGroup, Row } from "react-bootstrap";

const ItemsList = (prop) => (
    <>
        <CardGroup>
        <Row xs={1} md={2} className="g-4">
        {prop.item.map((x, index) => (
             <Item props={x} key={index}/>
            ))
        }
        </Row>
        </CardGroup>
    </>
)








export default ItemsList;