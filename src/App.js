import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";


import { MessageProvider } from "./context/MessageContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { ProductsProvider } from "./context/ProductsContext";
import { FiltersProvider } from "./context/FiltersContext";

function App() {
  return (
    <MessageProvider>
      <ProductsProvider>
        <CategoriesProvider>
          <Header />
          <Main />
          <Footer />
        </CategoriesProvider>
      </ProductsProvider>
    </MessageProvider>
  );
}
//
export default App;
