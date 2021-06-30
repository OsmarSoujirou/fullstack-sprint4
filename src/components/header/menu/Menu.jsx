import React from "react";
import MenuItem from "./menuItem/MenuItem";
import { useCategories } from "../../../context/CategoriesContext";
function Menu() {
  const { categories } = useCategories();

  const categoriesView = categories.map((categorie) => (
    <MenuItem key={categorie.id} categories={categorie} />
  ));

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">{categoriesView}</ul>
    </nav>
  );
}

export default Menu;

//onInput="produtoController.filtra(event)"
