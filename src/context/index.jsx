import React from 'react';

import { MessageProvider } from './MessageContext';
import { LoadingProvider } from './LoadingContext';

import { CategoriesProvider } from './CategoriesContext';
import { ProductsProvider } from './ProductsContext';
import { SearchProvider } from './SearchContext';

const Context = ({ children }) => {
  return (
    <MessageProvider>
      <LoadingProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <SearchProvider>{children}</SearchProvider>
          </ProductsProvider>
        </CategoriesProvider>
      </LoadingProvider>
    </MessageProvider>
  );
};
//
export { Context };
