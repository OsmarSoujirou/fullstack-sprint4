import React from "react";

function Product({ product }) {
    const { name, image, price, sku } = product;
    return (
   
          <li className="products__card card">
            <div className="card">
              <img className="card__img" src={image}/>
              <p className="card__description">
              {name}
              </p>
              <p className="card__price">
                R$ {price}
              </p>
            </div>
          </li>
  
    );
}

export default Product;
