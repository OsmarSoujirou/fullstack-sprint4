import React, { useState, useContext, createContext, useEffect } from 'react';
import { useMessage } from './MessageContext';
import { FetService } from '../services/FetService';
import { useLoading } from './LoadingContext';

const ProductsContext = createContext();

const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

const ProductsProvider = ({ children }) => {
  const [products, setProdutc] = useState([]);
  const [filters, setFilters] = useState([]);
  const { AddMessage } = useMessage();
  const { addRequest, removeRequest } = useLoading();

  useEffect(() => {
    addRequest();
    const getItems = async () => {
      try {
        const json = await FetService('data/products.json');
        setProdutc(json.products);
        setFilters(json.filters);
        AddMessage({ msg: 'Produtos importados com sucesso!' });
        AddMessage({ msg: 'Filtros importados com sucesso!' });
      } catch (error) {
        AddMessage({ msg: 'Ocorreu um erro ao buscar Api Products' });
      } finally {
        removeRequest();
      }
    };
    setTimeout(() => getItems(), 500);
  }, [AddMessage, addRequest, removeRequest]);
  return (
    <ProductsContext.Provider value={{ products, filters }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
