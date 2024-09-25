"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-2xl">Бүртгүүлэх</h1>
      <div className="flex flex-col gap-4">
        <Input type="name" placeholder="Нэр" />
        <Input type="email" placeholder="Имэйл хаяг" />
        <Input type="password" placeholder="Нууц үг" />
        <Input type="password" placeholder="Нууц үг давтах" />
      </div>
      <div className="text-sm flex flex-col gap-3">
        <p className="text-xs  text-slate-400">Том үсэг орсон байх</p>
        <p className="text-xs  text-slate-400">Жижиг үсэг орсон байх</p>
        <p className="text-xs  text-slate-400">Тоо орсон байх</p>
        <p className="text-xs  text-slate-400">Тэмдэг орсон байх</p>
      </div>
      <div className="flex flex-col gap-3">
        <Button className="bg-blue-500">Үүсгэх</Button>
        <Button className="bg-slate-50 border border-blue-500 text-blue-500">
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
};

export default Signup;
