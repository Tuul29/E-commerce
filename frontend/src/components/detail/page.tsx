import React from "react";
import { DetailImg } from "./detail-img";
import { DetailText } from "./detail-text";
const ProductDetail = () => {
  return (
    <div className="flex justify-center gap-20">
      <DetailImg />
      <DetailText />
    </div>
  );
};

export default ProductDetail;
