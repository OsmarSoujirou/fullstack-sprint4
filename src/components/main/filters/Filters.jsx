import React from "react";

function Filters() {
  return (
    <>
     <section className="main__filters filters">
        <ul className="filters__list">
          <li className="filters__item">
            <span className="filters__label">Tamanho</span>
            <img className="filters__img" src="assets/filter.svg" alt=""/>
          </li>
          <li className="filters__item">
            <span className="filters__label">Cor</span>
            <img className="filters__img" src="assets/filter.svg" alt=""/>
          </li>
          <li className="filters__item">
            <span className="filters__label">Departamento</span>
            <img className="filters__img" src="assets/filter.svg" alt=""/>
          </li>
          <li className="filters__item">
            <span className="filters__label">Categoria</span>
            <img className="filters__img" src="assets/filter.svg" alt=""/>
          </li>
          <li className="filters__item">
            <span className="filters__label">Manga</span>
            <img className="filters__img" src="assets/filter.svg" alt=""/>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Filters;
