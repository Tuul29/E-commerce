"use client";

import React from "react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
const BuyPage = () => {
  const ordered = products.slice(1, 5);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState<number>(0);

  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  const nextPage = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/buy");
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className="m-auto content-center">
        {step === 1 && (
          <Card className="rounded-2xl m-auto bg-white p-4 flex flex-col justify-between">
            <div className="flex gap-2">
              <p>1.</p>
              <p>Сагс</p>
              <p>(4)</p>
            </div>
            <div className="flex flex-col gap-5">
              {ordered.map((r) => (
                <div className="flex justify-between mx-10">
                  <div className="flex gap-2">
                    <img src={r.image} className="w-[50px] h-[50px] rounded " />{" "}
                    <ul className="font-light text-[13x]">
                      <li>{r.name}</li>
                      <li className="flex">
                        <Button className="rounded-full bg-transparent border border-black text-black">
                          -
                        </Button>
                        <p className="text-center">1</p>
                        <Button className="rounded-full bg-transparent border border-black text-black">
                          +
                        </Button>
                      </li>
                      <li className="font-bold">{r.price}₮</li>
                    </ul>
                  </div>{" "}
                </div>
              ))}
              <div className="flex justify-between border-t-[1px] border-dashed px-10 pt-8">
                <h3>Нийт төлөх дүн:</h3>
                <h2 className="font-bold">"360,000₮</h2>
              </div>
              <div>
                <Button onClick={nextPage}>Худалдан авах</Button>
              </div>
            </div>
          </Card>
        )}
        {step === 2 && (
          <div>
            <div className="flex flex-col gap-5">
              {ordered.map((r) => (
                <div className="flex justify-between mx-10">
                  <div className="flex gap-2">
                    <img src={r.image} className="w-[50px] h-[50px] rounded " />{" "}
                    <ul className="font-light text-[13x]">
                      <li>{r.name}</li>
                      <li>1x {r.price}₮</li>
                    </ul>
                  </div>{" "}
                  <h2 className="font-bold">{r.price}₮</h2>
                </div>
              ))}
              <div className="flex justify-between border-t-[1px] border-dashed px-10 pt-8">
                <h3>Нийт төлөх дүн:</h3>
                <h2 className="font-bold">480,000₮</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default BuyPage;
