import "./EmployeeLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token ? true : false 
  };

  if (!isLoggedIn()) {
    return <Navigate to='/' />
  }

  return (
    <div className="employee-layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default EmployeeLayout;
