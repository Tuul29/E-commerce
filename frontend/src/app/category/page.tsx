import React from "react";
import { CategoryBox, SizeBox } from "./checkbox";
import { ProductCards } from "./product-cards";
import { Product } from "@/lib/types";

interface ProductResponse {
  products: Product[];
}
const Category = () => {
  return (
    <div className="flex justify-center content-center m-9 gap-32">
      <div className="flex flex-col gap-5">
        <CategoryBox />
        <SizeBox />
      </div>
      {/* <div className="grid grid-cols-3 gap-4 content-start ">
        {products.map((product, index) => {
          return (
            <ProductCards
              key={index}
              name={product.name}
              price={product.price}
              images={product.images}
              discount={product.discount}
              _id={product._id}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default Category;
