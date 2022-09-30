import React, { Fragment } from 'react';
import styles from './Header.module.css'
import bannerImg from '../../assets/banner.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React Meal</h1>
                <HeaderCartButton text='Your Cart' showCart={props.showCart}></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={bannerImg} alt="food banner" />
            </div>
        </Fragment >
    );
}

export default Header;