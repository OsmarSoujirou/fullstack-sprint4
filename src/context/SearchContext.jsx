import React, { useState, useContext, createContext } from 'react';
//import { useMessage } from "./MessageContext";
import { useProducts } from './ProductsContext';

const SearchContext = createContext();

const useSearch = () => {
  const context = useContext(SearchContext);
  return context;
};

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({
    teste: false,
    array: [],
    optional: '',
  });
  //const { AddMessage } = useMessage();
  const { products } = useProducts();

  const updateSearch = (e) => {
    if (e) {
      const result = products.filter((product) =>
        product.name.toUpperCase().includes(e.toUpperCase()),
      );

      if (result.length > 0) {
        setSearch({ teste: true, array: result });
      } else {
        setSearch({
          teste: true,
          array: result,
          optional: 'Ops... não encontramos nada.',
        });
      }
    } else {
      setSearch({ teste: false, array: [] });
    }
  };

  return (
    <SearchContext.Provider value={{ search, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, useSearch };
