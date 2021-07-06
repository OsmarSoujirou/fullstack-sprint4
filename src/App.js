import React from "react";
import "./App.css";
import { Messages } from "./components/messages/Messages";
import { Loading } from "./components/loading/Loading";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import { MessageProvider } from "./context/MessageContext";
import { LoadingProvider } from "./context/LoadingContext";

import { CategoriesProvider } from "./context/CategoriesContext";
import { ProductsProvider } from "./context/ProductsContext";
import { SearchProvider } from "./context/SearchContext";



function App() {

  return (
    <MessageProvider>
      <LoadingProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <SearchProvider>
            <Loading />
            <Header />
            <Main />
          </SearchProvider>
        </ProductsProvider>
      </CategoriesProvider>
      <Footer />
      <Messages />
      </LoadingProvider>
    </MessageProvider>
  );
}
//
export default App;
