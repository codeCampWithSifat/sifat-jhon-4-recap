import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;
    let total = 0 ;
    for(const product of cart) {
        total = total + product.price ;
    }

    


    return (
        <div>
            <h3>Order Summary</h3>
            <h3>Number Of Item {props.cart.length}</h3>
            <p>Total Price {total}</p>
        </div>
    );
};

export default Cart;