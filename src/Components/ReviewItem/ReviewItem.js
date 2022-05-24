import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity,key} = props.product ;
    return (
        <div>
            <h4 className='product-name'>{name}</h4>
            <p>{price}</p>
            <p><small>Quantity {quantity}</small></p>
            <button 
            onClick={() => props.handleRemove(key)}
            className='main-button'>Remove Item</button>
            
        </div>
    );
};

export default ReviewItem;