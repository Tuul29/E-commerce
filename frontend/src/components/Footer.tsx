import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="bg-black w-{1440px} h-{282px} text-slate-200">
      <div className="flex justify-between border-t-2 py-10 px-24">
        <img className="w-9 h-7" src="/img/Vector.png" alt="logo" />
        <div className="flex gap-10">
          <div className="flex gap-6">
            <FiPhone className="border border-solid rounded-full" />
            <p>(976)7007-1234</p>
          </div>
          <div className="flex gap-6">
            <CiMail className="border border-solid rounded-full" />
            <p>contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-solid border-t py-10 px-24 border-slate-400">
        <p>© 2024 Ecommerce MN</p>
        <div className="flex gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};
