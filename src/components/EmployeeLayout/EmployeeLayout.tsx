import "./EmployeeLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const EmployeeLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token ? true : false 
  };

  if (!isLoggedIn()) {
    return <Navigate to='/' />
  }

  const logoutClick = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <div className="employee-layout">
      <Sidebar />
      <div className="content-body">
        <Button  buttonName="Logout" variant="logout" onClick={logoutClick} type="reset" />
        <div className="content-body__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;
