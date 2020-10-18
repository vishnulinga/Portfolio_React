import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© VISHNU LINGA &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;