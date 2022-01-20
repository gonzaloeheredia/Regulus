import React from 'react';
import Item from './Item';

const ItemsList = (prop) => (
    <>
        {prop.item.map((x) => (
             <Item props={x} key={x.id}/>
            ))
        }
    </>
)

export default ItemsList;