import React, { useContext } from 'react';
import './ProductCard.scss';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCartHandler = () => addItemToCart(products);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCartHandler}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
