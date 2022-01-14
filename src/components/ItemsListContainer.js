import React from 'react';

const ItemsListContainer = (props) => {
    return (
     <>
         <div>
         <h5 className="greeting"> {props.greeting }</h5>
        </div>
     </>
    );
  }

  export default ItemsListContainer;