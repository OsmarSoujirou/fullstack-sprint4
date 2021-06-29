import React from "react";

function  Menu() {
  return (
    <>
      <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="#link">
                <span>Novidades</span>
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Feminino</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Masculino</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Infantil</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Moda Íntima</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Calçados</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Acessórios e Relógios</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Beleza e Perfume</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Casa Riachuelo</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Eletrônicos</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Personagens</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#link">Outlet</a>
            </li>
          </ul>
        </nav>
    </>
  );
}

export default Menu;

//onInput="produtoController.filtra(event)"
