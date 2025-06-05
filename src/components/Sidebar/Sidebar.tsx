import './Sidebar.css'

import KVlogo from "../../assets/kv-logo.png";
import EmployeeIcon from '../../assets/icon.svg'
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
    const location = useLocation();
    const locationComponents = location.pathname.split("/")
    return (
        <div className="sidebar">
            <Link to="/employees" style={{textDecoration: "none"}} className='logo'>
                <img src={KVlogo} alt="kv-logo" className="logo-img" />
            </Link>
            <div className="sidebar-items">
                <Link to={location.pathname} style={{textDecoration: "none"}} className="sidebar-item-selected" >
                    <img src={EmployeeIcon} alt="employees icon" />
                    {(location.pathname == "/employees") ? <p>Employee List</p> : (location.pathname == "/employees/create") ? <p>Employee Create</p> : (locationComponents[1] == "employees" && locationComponents[3] == "update") ? <p>Employee Update</p> : (locationComponents.length == 3 && locationComponents[1] == "employees") ? <p>Employee Details</p> : ''}
                    
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;