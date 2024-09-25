"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-2xl">Нэвтрэх</h1>
      <div className="flex flex-col gap-4">
        <Input type="email" placeholder="Имэйл хаяг" className="text-sm" />
        <Input type="password" placeholder="Нууц үг" />
        <Button className="bg-blue-500">Нэвтрэх</Button>
      </div>
      <p className="underline text-slate-400">Нууц үг мартсан</p>
      <Button className="bg-slate-50 border border-blue-500 text-blue-500">
        Бүртгүүлэх
      </Button>
    </div>
  );
};

export default Login;
