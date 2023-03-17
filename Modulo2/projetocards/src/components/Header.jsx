import React from "react";

const Header = ({ children: title }) => {
  return (
    <header className="bg-emerald-500">
      <h1 className="py-5 text-center text-2xl">{title}</h1>
    </header>
  );
};

export default Header;
