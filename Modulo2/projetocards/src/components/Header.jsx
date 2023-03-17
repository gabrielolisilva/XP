import React from "react";

const Header = ({ children: title }) => {
  return (
    <header className="bg-gray-400">
      <h1 className="py-5 text-center text-2xl">{title}</h1>
    </header>
  );
};

export default Header;
