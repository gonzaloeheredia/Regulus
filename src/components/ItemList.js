import React from 'react';
import Item from './Item';

const ItemsList = ({items}) => (
    <>
        {{items}.map((x) => (
             <Item props={x}/>
            ))
        }
    </>
)

export default ItemsList;