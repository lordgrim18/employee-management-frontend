import { Link } from 'react-router-dom'
import './HeaderButton.css'


interface HeaderButtonProps {
    icon: string;
    name: string;
    variant?: string;
}

const HeaderButton = ({icon, name, variant}: HeaderButtonProps) => {
    return (
        <div className={`content-body__header__functions-button`} >
            <Link to="update" style={{textDecoration: "none"}}>
                <button>
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