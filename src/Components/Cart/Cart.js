import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    // let total = 0 ;
    // for(const product of cart) {
    //     total = total + product.price ;
    // }

    // const total = cart.reduce((total,product) => total + product.price, 0)
    let total = 0 ;
    let totlaQuantity = 0 ;
    for(const product of cart) {
        // console.log(product);
        product.quantity  = !product.quantity ? 1 : product.quantity
        total = total + product.price * product.quantity ;
        totlaQuantity = totlaQuantity + product.quantity
    }
    
    const  shipping = total > 0 ? 15 : 0;

    // if(total > 35) {
    //     shipping = 0
    // } else if(total > 15) {
    //     shipping = 4.99
    // } else if (total > 0) {
    //     shipping = 12.99
    // }
    const tax = (total+ shipping) * .10

    function formetNumber (num) {
        // const precision = num.toFixed(2);
        return Number(num.toFixed(2))
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Number Of Item {totlaQuantity}</h4>
            <p>Total Price : {formetNumber(total)}</p>
            <p>Shipping Cost : {formetNumber(shipping)}</p>
            <p>Tax And Vat : {formetNumber(tax)}</p>
            <h4>Grand Total : {formetNumber(total + shipping + tax)}</h4>
        </div>
    );
};

export default Cart;