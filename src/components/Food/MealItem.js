import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';
import CartContext from '../../store/cart-context';

const MealItem = ({ meal }) => {
    const cartCtx = useContext(CartContext)
    const addTocart = (amount) => {
        cartCtx.addItem({ id: meal.id, price: meal.price, amount: amount, name: meal.name });
    };
    return (<li className={styles.meal}>
        <div>
            <h3>{meal.name}</h3>
            <div className={styles.description}>{meal.description}</div>
            <div className={styles.price}>{meal.price}</div>
        </div>
        <div>
            <MealItemForm id={meal.id} addToCart={addTocart} />
        </div>
    </li >)
}

export default MealItem;