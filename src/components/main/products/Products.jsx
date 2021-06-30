import React from "react";
import Product from "./product/Product";
import { useProducts } from "../../../context/ProductsContext";


function Products() {
  const { products } = useProducts();
 
  const productsView =  products.map((product) => (
      <Product key={product.sku} product={product} />
    ));

   
  
  return (
    <section className="main__products products">
    <div id="produtosView">
    <div className="products__row">
      <ol className="products__list">
        {productsView}       
      </ol>
      
    </div>
    </div>
    </section>
  );
}

export default Products;
