import React from "react";
import { useProducts } from "../../../context/ProductsContext";
import { FilterItem } from "./filtersItem/FilterItem";

const Filters = () => {
  const {filters} = useProducts();

  const viewFilters = filters.map((filter) => <FilterItem key={filter.id} filter={filter}/>);

  return (
    <>
      <section className="main__filters filters">
        <ul className="filters__list">{viewFilters}</ul>
      </section>
    </>
  );
}

export {Filters};
