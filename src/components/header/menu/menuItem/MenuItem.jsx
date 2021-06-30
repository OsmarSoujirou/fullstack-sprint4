import React from "react";

function MenuItem({ categories }) {
  const { label, link } = categories;
  return (
    <li className="menu__item">
      <a className="menu__link" href={link}>
        {label}
      </a>
    </li>
  );
}

export default MenuItem;
