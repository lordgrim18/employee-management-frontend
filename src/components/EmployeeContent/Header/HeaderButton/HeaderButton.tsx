import { Link } from 'react-router-dom'
import './HeaderButton.css'


interface HeaderButtonProps {
    icon: string;
    name: string;
    variant?: string;
    linkTo: string;
    disabled?: boolean
}

const HeaderButton = ({icon, name, variant, linkTo, disabled}: HeaderButtonProps) => {
    return (
        <div className={`content-body__header__functions-button`} >
            <Link to={`${linkTo}`} style={{textDecoration: "none"}}>
                <button disabled={disabled}>
                    <i className={`header-button-icon ${variant}`}>
                        <img src={icon} />
                    </i>
                    <div className="header-button-text">{name}</div>
                </button>
            </Link>
        </div>
    )
}

export default HeaderButton