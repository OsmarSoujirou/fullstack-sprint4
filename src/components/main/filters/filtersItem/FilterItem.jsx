import React from "react";

const FilterItem = ({ filter }) => {
  const {label} = filter;
  return (
    <li className="filters__item">
      <span className="filters__label">{label}</span>
      <img className="filters__img" src="assets/filter.svg" alt="" />
    </li>
  );
};

export { FilterItem };
