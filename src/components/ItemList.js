import React from 'react';
import Item from './Item';

const ItemsList = (prop) => (
    <>
        {prop.item.map((x, index) => (
             <Item props={x} key={index}/>
            ))
        }
    </>
)

export default ItemsList;