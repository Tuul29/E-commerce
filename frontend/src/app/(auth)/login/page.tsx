"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

// type LogInProps = {
//   handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleLogIn: () => void;
// };
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  console.log("email", email);
  console.log("password", password);

  const userLogIn = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/auth/login`, {
        email: email,
        password: password,
      });
      if (res.status === 404) {
        console.log("Бүртгэлтэй хэрэглэгч байхгүй байна");
      }
      if (res.status === 200) {
        const { token, user } = res.data;
        console.log("User successfully signed in", token);
        router.push("/");
        localStorage.setItem("token", token);
      } else {
        console.error("Failed customer:");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="w-[320px">
        <h1 className="text-2xl font-semibold mb-8 text-center">Нэвтрэх</h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input
            type="email"
            placeholder="Имэйл хаяг"
            className="text-sm input-primary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Нууц үг "
            className="input-primary"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="bg-blue-500 button-primary" onClick={userLogIn}>
            Нэвтрэх
          </Button>
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
          <Link href="/signup">
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
