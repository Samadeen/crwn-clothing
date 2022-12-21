import { categories } from '../../data/Categories';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Directory.scss';

const Directory = () => {
  return (
    <div>
      <div className='directory-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      ;
    </div>
  );
};

export default Directory;
