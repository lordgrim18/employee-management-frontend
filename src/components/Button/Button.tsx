import './Button.css'

const Button = ({buttonName}: {buttonName: string}) => {
    return (
        <button className='custom-button'>{buttonName}</button>
    )
}

export default Button;