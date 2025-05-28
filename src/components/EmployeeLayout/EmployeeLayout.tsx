import "./EmployeeLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("isLoggedIn");
    console.log(token, token === "true");
    return token === "true";
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
