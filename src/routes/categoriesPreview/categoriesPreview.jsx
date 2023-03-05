import { useContext } from 'react';
import './categoriesPreview.scss';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <div className='category-preview-container'>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
