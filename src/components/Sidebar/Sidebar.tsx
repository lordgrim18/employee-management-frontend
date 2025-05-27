import './Sidebar.css'

import KVlogo from "../../../public/assets/kv-logo.png";
import EmployeeIcon from '../../../public/assets/icon.svg';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="/" className="logo">
                <img src={KVlogo} alt="kv-logo" className="logo-img" />
            </a>
            <div className="sidebar-items">
                <a href="/" className="sidebar-item-selected">
                    <img src={EmployeeIcon} alt="employees icon" />
                    <p>Employee List</p>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;