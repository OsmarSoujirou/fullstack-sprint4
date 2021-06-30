import React from "react";
import { ProductsProvider } from "./ProductsContext";
import { MessageProvider } from "./MessageContext";
import { CategoriesProvider } from "./CategoriesContext";

const AppProvider = ({ children }) => {
  return (
    <MessageProvider>
      <ProductsProvider>
        <CategoriesProvider>
          {children}
        </CategoriesProvider>
      </ProductsProvider>
    </MessageProvider>
  );
};

export default AppProvider;
