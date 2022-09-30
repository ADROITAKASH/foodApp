import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemsToCartHandler = () => { };
    const removeItemsFromCartHandler = () => { };
    const cartContext = {
        items: 0,
        amount: 0,
        addItem: addItemsToCartHandler,
        removeItem: removeItemsFromCartHandler
    };
    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);
}

export default CartProvider;