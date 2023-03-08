import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <span className='title'>{title.toUpperCase()}</span>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
