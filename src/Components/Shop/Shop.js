import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts,setDisplayProducts] = useState([])

    useEffect(() => {
        fetch(`./product.json`)
        .then(res =>res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data)
            // console.log('products received')
        })
    },[]);


    const handleAddToCart = (product) => {
        // console.log('Product Clicked', product);
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.key)
    }

    // cart container system
    useEffect(() => {
       if(products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key  in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                if(addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                    // console.log(addedProduct);
                }
            }
            setCart(storedCart);
       }
    },[products]);

    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts);
    }
    return (
      <div>
          <div className='search-container'>
              <input 
              onChange={handleSearch}
              type="text" placeholder='Search Your Favourite Products' />
          </div>
           <div className="shop-container">
           <div className="product-container">
                {
                   displayProducts.map(product => <Product
                        handleAddToCart = {handleAddToCart}
                         key={product.key} product={product}
                         
                         ></Product>)
                }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
       </div>
      </div>
    );
};

export default Shop;