"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const SignUp = () => {
  return (
    <div className="2xl:h-[calc(100vh-350px)] h-[calc(100vh-200px)] flex flex-col justify-center items-center bg-layer">
      <div className="w-[320px]">
        <h1 className="text-2xl font-semibold mb-8 text-center">Бүртгүүлэх</h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input type="name" placeholder="Нэр" className="input-primary" />
          <Input
            type="email"
            placeholder="Имэйл хаяг"
            className="input-primary"
          />
          <Input
            type="password"
            placeholder="Нууц үг"
            className="input-primary"
          />
          <Input
            type="password"
            placeholder="Нууц үг давтах"
            className="input-primary"
          />
          <ul className="text-sm flex flex-col gap-3">
            <li className="text-xs  text-slate-400">Том үсэг орсон байх</li>
            <li className="text-xs  text-slate-400">Жижиг үсэг орсон байх</li>
            <li className="text-xs  text-slate-400">Тоо орсон байх</li>
            <li className="text-xs  text-slate-400">Тэмдэг орсон байх</li>
          </ul>
        </div>
        <div className="flex flex-col gap-12">
          <Button className="bg-blue-500 button-primary">Үүсгэх</Button>
          <Link href="/login">
            <Button
              variant="outline"
              className="bg-slate-50 border border-blue-500 text-blue-500 rounded-[18px] w-full"
            >
              Нэвтрэх
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
