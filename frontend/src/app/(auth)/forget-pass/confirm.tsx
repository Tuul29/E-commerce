import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
const confirm = () => {
  return (
    <div>
      <img src="/img/Group.png" alt="mail" />
      <h1>Баталгаажуулах</h1>
      <p>"...@gmail.com" хаягт илгээсэн баталгаажуулах кодыг оруулна уу.</p>
      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default confirm;
