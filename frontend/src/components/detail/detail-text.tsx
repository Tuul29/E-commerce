import React from "react";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const DetailText = () => {
  return (
    <div>
      <Badge>Шинэ</Badge>
      <div className="flex gap-3">
        <h1>Wildflower Hoodie</h1>
        <CiHeart />
      </div>
      <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
      <div>
        <p>Хэмжээний заавар</p>
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
          <p>1</p>
          <Button className="rounded-full bg-transparent border border-black text-black">
            +
          </Button>
        </div>
        <p>120'000</p>
        <Button>Сагсанд нэмэх</Button>
        <div className="flex">
          <p>Үнэлгээ</p>
          <a>бүгдийг харах</a>
        </div>
      </div>
    </div>
  );
};
