import { useContext } from 'react';
import './Shop.scss';

import { ProductContext } from '../../contexts/ProductContext';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className='product-container'>
      {products.map((products, idx) => {
        return <ProductCard key={idx} products={products} />;
      })}
    </div>
  );
};

export default Shop;
