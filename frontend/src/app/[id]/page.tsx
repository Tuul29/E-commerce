"use client";
import { useEffect, useState, useContext } from "react";
import React from "react";
import { DetailImg } from "@/components/detail/detail-img";
import { DetailText } from "@/components/detail/detail-text";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

const ProductDetalPage = () => {
  return (
    <div className="w-1/2 m-auto p-10 ">
      <div className="flex justify-center gap-20 p-5">
        <DetailImg />
        <DetailText />
      </div>
      <h1 className="text-3xl font-bold mb-6">Холбоотой бараа</h1>
      <div className="grid grid-cols-4 gap-4 content-start ">
        {products.map((product, index) => {
          return (
            <>
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                discount={product.discount}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetalPage;
