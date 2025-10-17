import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className="px-6 py-3 rounded-lg bg-[#d9deb3] text-white font-semibold hover:bg-[#3c6125] focus:ring-2 focus:ring-[#3c6125] transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
