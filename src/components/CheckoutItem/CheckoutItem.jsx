import React, { useContext } from 'react';
import './CheckoutItem.scss';
import { CartContext } from '../../contexts/CartContext';

const CheckoutItem = ({ cartItem }) => {
  const { removeProduct, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const onRemoveProductHandler = () => {
    removeProduct(cartItem);
  };
  const onAddItemToCartHandler = () => {
    addItemToCart(cartItem);
  };
  const onRemoveItemFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={onRemoveItemFromCartHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={onAddItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={onRemoveProductHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
