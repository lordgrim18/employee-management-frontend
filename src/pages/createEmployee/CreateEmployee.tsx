import { useState } from "react";
import Button from "../../components/Button/Button";
import EmployeeForm from "../../components/EmployeeContent/EmployeeForm/EmployeeForm";

import "../../components/EmployeeContent/Header/Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeState,
} from "../../store/employee/employee.types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addEmployee } from "../../store/employee/employeeReducer";
import type { Role, Status } from "../../store/employee/employee.types";
import { useCreateEmployeeMutation } from "../../api-service/employees/employees.api";

const CreateEmployee = () => {
  const [values, setValues] = useState({
    name: "",
    dateOfJoining: "",
    experience: "" as unknown as number,
    departmentId: "" as unknown as number,
    role: "" as Role,
    status: "" as Status,
    addressLine1: "",
    addressLine2: "",
    houseNo: "",
    pincode: "",
    // employeeId: "",
    email: "",
    password: "",
    age: "" as unknown as number,
  });

  const [createEmployee, {isLoading}] = useCreateEmployeeMutation();

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const createEmployeeClick = async (e: React.FormEvent) => {
    e.preventDefault();
    createEmployee({
            name: values.name,
            dateOfJoining: values.dateOfJoining,
            experience: Number(values.experience),
            role: values.role,
            status: values.status,
            departmentId: Number(values.departmentId),
            email: values.email,
            password: values.password,
            age: Number(values.age),
            address: {
                line1: values.addressLine1,
                line2: values.addressLine2,
                houseNo: values.houseNo,
                pincode: values.pincode
            }
    })
    .unwrap()
    .then((response) => {
      console.log("employee created");
      navigate("/employees");
    })
    .catch((error) => console.log(error))

  };

  return (
      <>
        <h1 className="content-body__header">Create Employee</h1>
        <div className="content-body__form-wrapper">
          <form className="content-body__form">
            <EmployeeForm
              values={values}
              onChange={(field, value) =>
                setValues({
                  ...values,
                  [field]: value,
                })
              }
              isEdit={false}
            />
            <div className="content-body__form__submission">
              <Button
                buttonName="Create"
                variant="create-employee--create"
                onClick={createEmployeeClick}
                disabled={isLoading}
              />
              <Button
                type="button"
                buttonName="Cancel"
                variant="create-employee--close"
                onClick={handleCancel}
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
    </>
  );
};

export default CreateEmployee;
