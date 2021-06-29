import React from "react";

function Searchbar() {
  return (
    <>
      <div className="header__search">
        <img className="header__icon" src="assets/search.svg" alt=""/>
        <input
          className="header__input"
          type="search"
          placeholder="O que você está procurando?"
        />
      </div>
    </>
  );
}

export default Searchbar;

//onInput="produtoController.filtra(event)"
