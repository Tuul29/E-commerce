"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1>Бүртгүүлэх</h1>
      <div className="w-{334px}">
        <Input type="name" placeholder="Нэр" />
        <Input type="email" placeholder="Имэйл хаяг" />
        <Input type="password" placeholder="Нууц үг" />
        <Input type="password" placeholder="Нууц үг давтах" />
      </div>
      <div className="flex flex-col">
        <Button>Үүсгэх</Button>
        <Button>Нэвтрэх</Button>
      </div>
    </div>
  );
};

export default Signup;
