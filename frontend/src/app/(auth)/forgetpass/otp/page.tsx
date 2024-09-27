import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Otp = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(30);
  const [otpValue, setOtpValue] = useState("12");

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countDown]);
  const handleResendOtp = () => {
    setCountDown(30);
  };
  const handleConfirnOtp = (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      router.push("/forgetpass/newpass");
    }
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
      <img src="/img/Group.png" alt="mail" />
      <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
      <p className="mt-2 mb-6 text-text-primary">
        "mujo@nest.edu.mn" хаягт илгээсэн баталгаажуулах кодыг оруулна уу.
      </p>
      <div className="flex flex-col gap-4 text-sm">
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup className="bg-white">
            <InputOTPSlot className="w-14 h-14" index={0} />
            <InputOTPSlot className="w-14 h-14" index={1} />
            <InputOTPSlot className="w-14 h-14" index={2} />
            <InputOTPSlot className="w-14 h-14" index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
          onClick={handleResendOtp}
          variant="link"
        >
          Дахин илгээх ({countDown})
        </Button>
      </div>
    </div>
  );
};

export default Otp;
