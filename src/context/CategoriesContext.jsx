import React, { useState, useContext, createContext, useEffect } from 'react';
import { useMessage } from './MessageContext';
import { FetService } from '../services/FetService';
import { useLoading } from './LoadingContext';

const CategoriesContext = createContext();

const useCategories = () => {
  const context = useContext(CategoriesContext);
  return context;
};

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [breadcumbs, setBreadcumbs] = useState([]);
  const { AddMessage } = useMessage();

  const { addRequest, removeRequest } = useLoading();

  useEffect(() => {
    const getItems = async () => {
      addRequest();

      try {
        const json = await FetService('data/categories.json');
        setCategories(json.all);
        setBreadcumbs(json.current);
        AddMessage({ msg: 'Categorias importadas com sucesso!' });
        AddMessage({ msg: 'Breadcumbs importados com sucesso!' });
      } catch (error) {
        AddMessage({ msg: 'Ocorreu um erro ao buscar a API Categories!' });
      } finally {
        removeRequest();
      }
    };
    setTimeout(() => getItems(), 500);
  }, [AddMessage, addRequest, removeRequest]);
  return (
    <CategoriesContext.Provider value={{ categories, breadcumbs }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider, useCategories };
