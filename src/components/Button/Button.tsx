import './Button.css'

const Button = ({buttonName, variant}: {buttonName: string, variant: string}) => {
    return (
        <button className={`custom-button button--${variant}`}>{buttonName}</button>
    )
}

export default Button;