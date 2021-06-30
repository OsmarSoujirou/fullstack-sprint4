import React, { useState, createContext, useEffect, useContext, useCallback } from "react";
import { useMessage } from './MessageContext';

const ProductsContext = createContext();

const useProducts = () => {
    const context =  useContext(ProductsContext);
    return context;
  
  };

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { AddMessage } = useMessage();

  useEffect(() => {
   AllProducts();
  }, []);


  const AllProducts = useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch(
        "http://localhost:3000/data/products.json"
      );
      if (!response.ok) {
        AddMessage("Erro ao carregar os dados dos produtos !");
      }
      
      json = await response.json();
    } catch (err) {
      json = null;
    } finally {
        console.log("Nova chamada");
      setProducts(json.products);      
    }
  },[AddMessage]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};



export { ProductsProvider, useProducts };
