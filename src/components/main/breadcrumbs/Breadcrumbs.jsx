import React from "react";
import { BreadcrumbsItem } from "./breadcrumbsItem/BreadcrumbItem";
import { useCategories } from "../../../context/CategoriesContext";

const Breadcrumbs = () => {
  const { breadcumbs } = useCategories();

  const viewBreadcrumbs = breadcumbs.map((breadcumb) => (
    <BreadcrumbsItem key={breadcumb.id} breadcumb={breadcumb} />
  ));

  return (
    <>
      <section className="main__breadcrumbs breadcrumbs">
        <nav>
          <ol className="breadcrumbs__list">{viewBreadcrumbs}</ol>
        </nav>
      </section>
    </>
  );
};

export { Breadcrumbs };
