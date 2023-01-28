import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments } from '../utils/Firebase/Firebase';

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
