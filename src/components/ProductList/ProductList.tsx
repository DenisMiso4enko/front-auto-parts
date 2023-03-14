import React from "react";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="product__list">
      {products &&
        products.map((el, index) => <ProductListItem key={el._id} {...el} />)}
    </div>
  );
};

export default ProductList;
