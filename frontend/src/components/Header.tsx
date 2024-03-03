import React from "react";
import logo from "../assets/Logo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="MemoCare Logo" />
    </header>
  );
};

export default Header;
