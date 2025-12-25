
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()} Password Manager • Built by Rahim
      </p>
    </footer>
  );
};

export default Footer;
