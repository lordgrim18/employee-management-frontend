import type React from "react";
import "./Button.css";
import type { MouseEventHandler } from "react";

const Button = ({
  type,
  onClick,
  disabled,
  buttonName,
  variant,
}: {
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonName: string;
  variant: string;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button button--${variant}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
