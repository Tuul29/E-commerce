import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const ForgetPass = () => {
  return (
    <div>
      <h1>Нууц үг сэргээх</h1>
      <div>
        <Input type="text" placeholder="Имэйл хаяг оруулах" />
        <Button>Илгээх</Button>
      </div>
    </div>
  );
};

export default ForgetPass;
