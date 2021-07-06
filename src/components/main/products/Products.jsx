import React from 'react';
import { Product } from './product/Product';
import { useProducts } from '../../../context/ProductsContext';
import { useSearch } from '../../../context/SearchContext';

const Products = () => {
  const { products } = useProducts();
  const { search } = useSearch();

  const productsView = products.map((product) => (
    <Product key={product.sku} product={product} />
  ));
  //console.log(search.optional);
  const productsSearch = search.array.map((product) => (
    <Product key={product.sku} product={product} />
  ));

  return (
    <section className="main__products products">
      <div id="produtosView">
        <div className="products__row">
          <ol className="products__list">
            {search.teste ? productsSearch : productsView}
            {search.optional && <div className="_404">{search.optional}</div>}
          </ol>
        </div>
      </div>
    </section>
  );
};

export { Products };
