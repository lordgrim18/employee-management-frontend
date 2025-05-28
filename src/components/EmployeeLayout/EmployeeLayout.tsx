import './EmployeeLayout.css';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const EmployeeLayout = () => {
    return (
        <div className="employee-layout">
            <Sidebar />
            <Outlet />
        </div>
    )

}

export default EmployeeLayout;