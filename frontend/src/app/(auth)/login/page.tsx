"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="w-[320px">
        <h1 className="text-2xl font-semibold mb-8 text-center">Нэвтрэх</h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input
            type="email"
            placeholder="Имэйл хаяг"
            className="text-sm input-primary"
          />
          <Input
            type="password"
            placeholder="Нууц үг "
            className="input-primary"
          />
          <Button className="bg-blue-500 button-primary">Нэвтрэх</Button>
        </div>
        <div className="flex flex-col gap-12 mt-4">
          <Link href="/forgetpass/email" className="text-center text-sm">
            <Button
              className="underline text-muted-foreground font-normal"
              variant="link"
            >
              Нууц үг мартсан
            </Button>
          </Link>
          <Link href="/singup">
            <Button className="bg-slate-50 border border-blue-500 text-blue-500">
              Бүртгүүлэх
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
