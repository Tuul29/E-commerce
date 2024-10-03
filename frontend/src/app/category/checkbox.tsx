import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const categoryList = ["Малгай", "Усны сав", "T-Shirt", "Hoodie", "Tee", "Цүнх"];

export const CategoryBox = () => {
  return (
    <div className="font-bold">
      <h6 className="mb-4">Ангилал</h6>
      <div className="flex flex-col gap-3">
        {categoryList?.map((category) => (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-[#09090B] dark:text-white font-medium"
            >
              {category}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

const sizeList = ["XS", "S", "M", "XL", "2XL", "3XL"];

export const SizeBox = () => {
  return (
    <div className="font-bold">
      <h6 className="mb-4">Хэмжээ</h6>
      <div className="flex flex-col gap-3">
        {sizeList?.map((size) => (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-[#09090B] dark:text-white font-medium"
            >
              {size}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};
