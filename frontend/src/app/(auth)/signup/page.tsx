"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const router = useRouter();
  const signUp = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/auth/signup`, {
        firstname: firstName,
        lastname: lastname,
        email: email,
        password: password,
      });
      if (res.status === 201) {
        console.log("success");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to sign up. Please try again.");
    }
  };
  return (
    <div className="2xl:h-[calc(100vh-350px)] h-[calc(100vh-200px)] flex flex-col justify-center items-center bg-layer">
      <div className="w-[320px]">
        <h1 className="text-2xl font-semibold mb-8 text-center">Бүртгүүлэх</h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input
            type="text"
            placeholder="Нэр last"
            className="input-primary"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Нэр first"
            className="input-primary"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Имэйл хаяг"
            className="input-primary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Нууц үг"
            className="input-primary"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Нууц үг давтах"
            className="input-primary"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <ul className="text-sm flex flex-col gap-3">
            <li className="text-xs  text-slate-400">Том үсэг орсон байх</li>
            <li className="text-xs  text-slate-400">Жижиг үсэг орсон байх</li>
            <li className="text-xs  text-slate-400">Тоо орсон байх</li>
            <li className="text-xs  text-slate-400">Тэмдэг орсон байх</li>
          </ul>
        </div>
        <div className="flex flex-col gap-12">
          <Button className="bg-blue-500 button-primary" onClick={signUp}>
            Үүсгэх
          </Button>
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
