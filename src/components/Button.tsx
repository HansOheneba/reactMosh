import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} type="button" className={`btn btn-` + color}>
        {children}
      </button>
    </div>
  );
};

export default Button;
