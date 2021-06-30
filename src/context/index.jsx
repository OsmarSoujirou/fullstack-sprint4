import React from 'react';
import { ProductsProvider } from './ProductsContext';
import { MessageProvider } from './MessageContext';

const AppProvider = ({ children }) => {
  return (
    <MessageProvider>
     <ProductsProvider>
     {children}
     </ProductsProvider>
    </MessageProvider>
  );
};

export default AppProvider;
