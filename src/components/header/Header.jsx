import React from "react";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Menu from "./menu/Menu";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Searchbar />
        <Menu />
      </div>
    </header>
  );
}
export default Header;
