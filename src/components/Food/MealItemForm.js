import React, { useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../UI/Input'

const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);
    const amountInput = React.createRef();
    const handleAddTocart = (event) => {
        event.preventDefault();
        const amount = +amountInput.current.value;
        props.addToCart(amount)
        if (amount < 1 || amount > 5) {
            setAmountValid(false);
        }
    };
    return (
        <form className={styles.form} onSubmit={handleAddTocart}>
            <Input
                ref={amountInput}
                label='Amount'
                input={{
                    id: 'amount_' + props.id, // this changed!
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button type='submit'>Add</button>
            {!amountValid && <p>Please Enter a valid amount between 1-5</p>}
        </form>
    )

}

export default MealItemForm;