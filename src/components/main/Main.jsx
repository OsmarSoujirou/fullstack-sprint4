import React from "react";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";
import Products from "./products/Products";
import Filters from "./filters/Filters";

function Main() {
  return (
    <main className="main">
      <Breadcrumbs />      
      <Filters />
      <Products />
    </main>
  );
}
export default Main;

