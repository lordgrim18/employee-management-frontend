import type React from "react";

interface LoginInputProps {
    id: string,
    label: string,
    type?: string,
    value?: string | boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ref?: React.RefObject<HTMLInputElement | null>;
}

const LoginInput = ({ id, label, type = "text", value, onChange, ref }: LoginInputProps) => {
    return (
        <div className="form-element form-element--login">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder=""   value={value} onChange={onChange} ref={ref} required />
        </div>
    )
};

export default LoginInput;