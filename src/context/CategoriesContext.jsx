import React, { useState, createContext, useEffect, useContext } from "react";
import { ProductsService } from "../services/ProductsService";
import { useMessage } from "./MessageContext";

const CategoriesContext = createContext();

const useCategories = () => {
  const context = useContext(CategoriesContext);
  return context;
};

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  
  const { AddMessage } = useMessage();

  useEffect(() => {

    const AllCategories = async () => {
      let json;

      try {
        json = await ProductsService(
          "http://localhost:3000/data/categories.json"
        );
      } finally {
        if (json === undefined) {
          AddMessage({ msg: "Erro ao carregar categorias!" });
        } else {
           
          setCategories(json.all);
          console.log("Categorias importados com sucesso!")
         // AddMessage({ msg: "Categorias importados com sucesso!" });
        }
      }
    };
    AllCategories();
  }, [AddMessage]);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider, useCategories };
