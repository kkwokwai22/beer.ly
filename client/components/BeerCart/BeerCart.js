import React, { PropTypes } from 'react';
import CartItem from '../CartItem/CartItem';

import styles from './BeerCart.css';

import RaisedButton from 'material-ui/RaisedButton';

const CART_SIZE = 4;

const BeerCart = ({ beers, removeFromCart, inCheckout, checkout }) => {
  const cartItems = beers.map((beer, index) => {
    return <CartItem key={index} beer={beer} removeFromCart={removeFromCart(index)} />;
  });

  const cartDetailsHandler = cartItems.length ?
    <h4>Your Cart has `${cartItems.length}` / 4 selections</h4>
    : <h4>Your Cart is Empty!</h4>;

  const checkout = beers.length === CART_SIZE && inCheckout && <RaisedButton className={styles.button} primary onClick={checkout} label="Checkout" />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        {cartDetailsHandler}
        {checkout}
      </div>
      <div className={styles.cartRow}>
      {cartItems}
      </div>
    </div>
  );
};

BeerCart.propTypes = {
  inCheckout: PropTypes.bool,
  beers: PropTypes.array,
  checkout: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default BeerCart;
