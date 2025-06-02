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

const CreateEmployee = () => {
  const [values, setValues] = useState({
    name: "",
    DateOfJoining: "",
    experience: "" as unknown as number,
    departmentId: "" as unknown as number,
    role: "" as Role,
    status: "" as Status,
    addressLine1: "",
    addressLine2: "",
    houseNo: "",
    pincode: "",
    employeeId: "",
    email: "",
    password: "",
    age: "" as unknown as number,
  });

  const navigate = useNavigate();

  const employees = useAppSelector((state) => state.employee.employees);
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    navigate(-1);
  };

  const createEmployee = (e: React.FormEvent) => {
    console.log(values)
    e.preventDefault();
    // dispatch({ 
    //     type: EMPLOYEE_ACTION_TYPES.ADD, 
    //     payload: {
    //         id: employees.length + 1,
    //         name: values.name,
    //         dateOfJoining: values.DateOfJoining,
    //         experience: values.experience,
    //         role: values.role,
    //         status: values.status,
    //         employeeId: crypto.randomUUID(),
    //         address: {
    //             line1: values.addressLine1,
    //             line2: values.addressLine2,
    //             houseNo: values.houseNo,
    //             pincode: values.pincode
    //         }
    //     } 
    // });

    dispatch( addEmployee({
            id: employees.length + 1,
            name: values.name,
            dateOfJoining: values.DateOfJoining,
            experience: Number(values.experience),
            role: values.role,
            status: values.status,
            employeeId: crypto.randomUUID(),
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
  )
    navigate("/employees");
  };

  return (
    <div className="content-body">
      <div className="content-body__content">
        <h1 className="content-body__header">Create Employee</h1>
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
              onClick={createEmployee}
            />
            <Button
              type="button"
              buttonName="Cancel"
              variant="create-employee--close"
              onClick={handleCancel}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
