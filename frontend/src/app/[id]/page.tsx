"use client";
import { useEffect, useState, useContext } from "react";
import React from "react";
import { DetailImg } from "@/components/detail/detail-img";
import { DetailText } from "@/components/detail/detail-text";

const ProductDetalPage = () => {
  return (
    <div>
      <DetailImg />
      <DetailText />
    </div>
  );
};

export default ProductDetalPage;
