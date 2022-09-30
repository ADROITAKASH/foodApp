import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={styles['cart-items']}>{[{ id: 'm1', name: 'Sushi' }, { id: 'm2', name: 'Schnitzel' }].map((cartItem) => <li>{cartItem.name}</li>)}</ul>
    return (<Modal backdropOnClick={props.hideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.hideCart}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>)
}

export default Cart;