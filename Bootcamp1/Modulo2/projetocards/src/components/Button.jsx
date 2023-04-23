import React from "react";

const Button = ({
  title = "Titulo do botão",
  type = "button",
  justify = "",
  bgColor,
  onClickMethod,
}) => {
  return (
    <div className={`flex ${justify} mt-4`}>
      <button
        type={type}
        className={`${bgColor} p-4 rounded-lg text-white`}
        onClick={onClickMethod}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
