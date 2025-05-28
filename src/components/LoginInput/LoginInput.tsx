import './LoginInput.css'
import type React from "react";

interface LoginInputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement | null>;
  endAdornment?: React.ReactNode;
  checked?: boolean;
  required?: boolean;
}

const LoginInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  ref,
  endAdornment = null,
  checked,
  required = true
}: LoginInputProps) => {
  return (
    <div className={`form-element-parent--${id}`} style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <div className={`form-element form-element--login form-element--${id}`}>
        <input
          type={type}
          id={id}
          placeholder=""
          value={value}
          onChange={onChange}
          ref={ref}
          defaultChecked={checked}
          required = {required && true }
        />
        <label htmlFor={id}>{label}</label>
      </div>
      {endAdornment ? endAdornment : null}
    </div>
  );
};

export default LoginInput;
