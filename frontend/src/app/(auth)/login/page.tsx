"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-2xl">Нэвтрэх</h1>
      <div>
        <Input type="email" placeholder="Имэйл хаяг" className="text-sm" />
        <Input type="password" placeholder="Нууц үг" />
        <Button className="w-{334px}">Нэвтрэх</Button>
      </div>
      <p className="">Нууц үг мартсан</p>
      <Button>Бүртгүүлэх</Button>
    </div>
  );
};

export default Login;
