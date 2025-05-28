import type React from 'react';
import './Button.css'
import type { MouseEventHandler } from 'react';

const Button = ({type, onClick, buttonName, variant}: {type?: "submit" | "reset" | "button", onClick: MouseEventHandler<HTMLButtonElement>, buttonName: string, variant: string}) => {
    return (
        <button type={type} onClick={onClick} className={`custom-button button--${variant}`}>{buttonName}</button>
    )
}

export default Button;