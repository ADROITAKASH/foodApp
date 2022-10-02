import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import CartContext from '../store/cart-context';

const HeaderCartButton = ({ text, showCart }) => {
    const cartCtx = useContext(CartContext);
    return (<button className={styles.button} onClick={showCart}>
        <span className={styles.icon}><CartIcon /></span>
        <span>{text}</span>
        <span className={styles.badge}>{cartCtx.items.length}</span>
    </button>);
}

export default HeaderCartButton;