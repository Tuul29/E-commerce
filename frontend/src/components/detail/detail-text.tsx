import React from "react";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const DetailText = () => {
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
          <Button className="rounded-full bg-transparent border border-black text-black">
            -
          </Button>
          <p className="text-center">1</p>
          <Button className="rounded-full bg-transparent border border-black text-black">
            +
          </Button>
        </div>
        <p>120'000</p>
        <Button className="bg-[#2563EB]">Сагсанд нэмэх</Button>
        <div className="flex">
          <p className="mr-2 text-sm">Үнэлгээ</p>
          <a className="text-sm text-[#2563EB] underline">бүгдийг харах</a>
        </div>
      </div>
    </div>
  );
};
