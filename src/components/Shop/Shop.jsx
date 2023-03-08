import { useContext } from 'react';
import './Shop.scss';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <div className='shop-container'>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
