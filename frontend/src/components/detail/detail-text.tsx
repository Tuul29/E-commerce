import React from "react";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { apiUrl } from "@/lib/utils";
import { useUser } from "@/provider/user-provider";
import { useParams } from "next/navigation";
import { Product } from "@/lib/types";
import axios from "axios";
import { toast } from "sonner";
export const DetailText = () => {
  const { user } = useUser();
  const { id } = useParams();
  const [product, setProduct] = useState<Product>({
    _id: "",
    name: "",
    price: 0,
    images: [""],
    discount: 0,
  });
  const [productQuantity, setProductQuantity] = useState(0);
  const getProductDataById = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products/${id}`);
      if (response.status === 200) {
        setProduct(response.data.product);
      }
    } catch (error) {
      console.error("Error  fetching data:", error);
      toast.error("Failed to get product detail");
    }
  };
  const addToCart = async () => {
    try {
      const response = await axios.post(`${apiUrl}/carts/create-cart`, {
        userId: user?._id,
        productId: id,
        quantity: productQuantity,
      });

      if (response.status === 200) {
        toast.success("Successfully added to cart");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to add to cart");
    }
  };
  useEffect(() => {
    getProductDataById();
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <Badge className="bg-transparent text-black border border-black w-16 text-xs text-center font-semibold">
        Шинэ
      </Badge>
      <div className="flex gap-3">
        <h1 className="font-bold text-2xl">Wildflower Hoodie</h1>
        <CiHeart className="w-6 h-6" />
      </div>
      <p className="text-base">
        Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
      </p>
      <div>
        <p className="text-base ">Хэмжээний заавар</p>
        <ul className="flex gap-3">
          <Button className="rounded-full bg-transparent border border-black text-black">
            S
          </Button>
          <Button className="rounded-full bg-transparent border border-black text-black">
            M
          </Button>
          <Button className="rounded-full bg-transparent border border-black text-black">
            L
          </Button>
          <Button className="rounded-full bg-transparent border border-black text-black">
            XL
          </Button>
          <Button className="rounded-full bg-transparent border border-black text-black">
            2XL
          </Button>
        </ul>
        <div className="flex gap-5">
          <p
            className="border border-solid border-black px-2 rounded-full cursor-pointer"
            onClick={() => setProductQuantity(productQuantity - 1)}
          >
            -
          </p>
          <p>{productQuantity}</p>
          <p
            className="border border-solid border-black px-2 rounded-full cursor-pointer"
            onClick={() => setProductQuantity(productQuantity + 1)}
          >
            +
          </p>
        </div>
        <p>120'000</p>
        <Button className="bg-[#2563EB]" onClick={addToCart}>
          Сагсанд нэмэх
        </Button>
        <div className="flex">
          <p className="mr-2 text-sm">Үнэлгээ</p>
          <a className="text-sm text-[#2563EB] underline">бүгдийг харах</a>
        </div>
      </div>
    </div>
  );
};
