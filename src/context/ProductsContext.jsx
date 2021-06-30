import React, { useState, createContext, useEffect, useContext } from "react";
import { ProductsService } from "../services/ProductsService";
import { useMessage } from "./MessageContext";

const ProductsContext = createContext();

const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  

  const { AddMessage } = useMessage();

  useEffect(() => {
    console.log();
    const AllProducts = async () => {
      let json;

      try {
        json = await ProductsService(
          "http://localhost:3000/data/products.json"
        );
      } finally {
        if (json === undefined) {
          AddMessage({ msg: "Erro ao carregar os dados dos produtos !" });
        } else {
          setProducts(json.products);
          console.log("Produtos importados com sucesso!")
          AddMessage({ msg: "Produtos importados com sucesso!" });
        }
      }
    };
    AllProducts();
  }, [AddMessage]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
