import React from "react";
import { SlBasket } from "react-icons/sl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between h-(68px) w-(1440px) bg-black py-4 px-24">
      <div className="flex gap-3 ">
        <img className="w-8 h-8" src="/img/Vector.png" alt="logo" />
        <h3 className="text-slate-50">ECOMMERCE</h3>
        <h4 className="text-slate-500">Ангилал</h4>
      </div>
      <div>
        <Input placeholder="Бүтээгдэхүүн хайх" />
      </div>
      <div className="flex gap-2">
        <FaRegHeart className="text-slate-50 size-6" />
        <SlBasket className="text-slate-50 size-6" />
        <Button className="rounded-2xl  bg-black border-1 border-solid border-blue-500">
          Бүртгүүлэх
        </Button>
        <Button className="rounded-2xl bg-blue-600">Нэвтрэх</Button>
      </div>
    </div>
  );
};

export default Header;
