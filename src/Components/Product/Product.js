import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {name, img, price,seller,stock,} = props.product;
    return (
        <div className='product'>
          <div>
          <img src={img} alt="" />
          </div>
           <div>
           <h4 className='product-name'>{name}</h4>
           <p><small>Sales By : {seller}</small></p>
           <h4>Price {price}</h4>
           <h6>only have in stock {stock}</h6>
           <button 
           onClick={() => props.handleAddToCart(props.product)}
           className='main-button'>add to cart <FontAwesomeIcon icon={faArrowRight} /></button>
           </div>
        </div>
    );
};

export default Product;