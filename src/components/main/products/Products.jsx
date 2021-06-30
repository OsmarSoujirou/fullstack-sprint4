import React from "react";
import Product from "./product/Product"
import { useProducts } from '../../../context/ProductsContext';

function Products() {  
  const { products } = useProducts();
  return (
 
    <ol className="products__list">
        {products.map((product) => ( <Product key={product.sku} product={product} />))}
    </ol>

  );
}
//{products.map((product) => ( <Product key={product.sku} product={product} />))} 
//AddMessage("Produtos importados com sucesso!")
export default Products;
