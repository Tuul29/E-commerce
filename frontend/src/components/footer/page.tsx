import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black w-(1440px) h-(282px) text-slate-200">
      <div className="flex">
        <img className="w-7 h-8" src="/img/Vector.png" alt="logo" />
        <div>
          <FiPhone />
          <p>(976)7007-1234</p>
          <CiMail />
          <p>contact@ecommerce.mn</p>
        </div>
      </div>
      <div className="flex">
        <p>© 2024 Ecommerce MN</p>
        <div>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
