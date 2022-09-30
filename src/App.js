import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Meals from './components/Food/Meals';
import Header from './components/Layout/Header'
import CartProvider from './components/store/CartProvider';

function App() {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    }
    const hideCartHandler = () => {
        setShowCart(false);
    }

    return (
        <CartProvider>
            <Header showCart={showCartHandler} />
            {showCart && <Cart hideCart={hideCartHandler} />}
            <Meals />
        </CartProvider>
    );
}

export default App;
