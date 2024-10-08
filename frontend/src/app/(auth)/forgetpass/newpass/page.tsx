"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const NewPass = () => {
  // const router = useRouter();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const params = useSearchParams();
  const router = useRouter();

  const handleNewPassword = async () => {
    if (password === repassword) {
      const resetToken = params.get("resettoken");
      console.log(password, resetToken);
      try {
        const res = await axios.post(
          `http://localhost:8000/api/v1/auth/verify-password`,
          {
            password: password,
            resetToken: params.get("resettoken"),
            email: params.get("email"),
          }
        );
        if (res.status === 200) {
          router.push("/login");
        }
      } catch (error) {
        console.log("Object", error);
      }
    } else {
      alert("Нууц үг тохирохгүй байна.");
    }

    console.log("RT", params.get("resettoken"));
    console.log("EMAIL", params.get("email"));
    // router.push("/login");
  };
  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center">
      <div className="w-[320px mt-24">
        <h1 className="text-2xl font-semibold mb-8 text-center">
          Нууц үг сэргээх
        </h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input
            type="password"
            placeholder="Шинэ нууц үг "
            className="input-primary"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Шинэ нууц үг давтах"
            className="input-primary"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ul className="list-disc pl-5 text-muted-foreground text-xs font-light leading-5 flex flex-col gap-1">
            <li>Том үсэг орсон байх</li>
            <li>Жижиг үсэг орсон байх</li>
            <li>Тоо орсон байх</li>
            <li>Тэмдэгт орсон байх</li>
          </ul>
          <Button className="button-primary" onClick={handleNewPassword}>
            Нууц үг шинээр үүсгэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
