import './Sidebar.css'

import KVlogo from "../../assets/kv-logo.png";
import EmployeeIcon from '../../assets/icon.svg'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/employees" style={{textDecoration: "none"}} className='logo'>
                <img src={KVlogo} alt="kv-logo" className="logo-img" />
            </Link>
            <div className="sidebar-items">
                <Link to="/employees" style={{textDecoration: "none"}} className="sidebar-item-selected" >
                    <img src={EmployeeIcon} alt="employees icon" />
                    <p>Employee List</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;