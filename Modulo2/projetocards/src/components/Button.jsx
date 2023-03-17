import React from "react";

const Button = ({
  title = "Titulo do botão",
  type = "button",
  bgColor,
  onClickMethod,
}) => {
  return (
    <div className="flex justify-center mt-7">
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
