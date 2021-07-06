import React from "react";

const BreadcrumbsItem = ({ breadcumb }) => {
  const {name, link} = breadcumb;
  return (
    <li className="breadcrumbs__item">
      <a className={link ? "breadcrumbs__link": "breadcrumbs__item breadcrumbs__item--active"}  href={link}>
        {name}
      </a>
    </li>
  );
};

export { BreadcrumbsItem };
