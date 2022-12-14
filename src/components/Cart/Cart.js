import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (<Modal backdropOnClick={props.hideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>${cartCtx.amount.toFixed(2)}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.hideCart}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>)
}

export default Cart;