import React from "react";
import { Breadcrumbs } from "./breadcrumbs/Breadcrumbs";
import { Products } from "./products/Products";
import { Filters } from "./filters/Filters";
import { useProducts } from "../../context/ProductsContext";


function Main() {
  const { products } = useProducts();
  const { filters } = useProducts();

  return (
    <main className="main">
      <Breadcrumbs /> 
      {filters.length > 0 ? <Filters /> : ""}
      {products.length > 0  ? <Products /> : ""}
    </main>
  );
}
export default Main;
