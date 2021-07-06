import React from 'react';
import { useSearch } from '../../../context/SearchContext';
import { useLoading } from '../../../context/LoadingContext';
function Searchbar() {
  const { addRequest, removeRequest } = useLoading();
  const { updateSearch } = useSearch();
  let typingTimer;
  const Changes = (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => Anime(e), 500);
  };

  const Anime = (e) => {
    addRequest();
    setTimeout(() => updateSearch(e), 400);
    removeRequest();
  };
  return (
    <div className="header__search">
      <img className="header__icon" src="assets/search.svg" alt="" />
      <input
        className="header__input"
        type="search"
        onChange={({ target }) => Changes(target.value)}
        placeholder="O que você está procurando?"
      />
    </div>
  );
}

export default Searchbar;

//onInput="produtoController.filtra(event)"
