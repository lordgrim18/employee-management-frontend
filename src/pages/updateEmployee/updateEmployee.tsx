import { useState } from "react";
import Button from "../../components/Button/Button";
import EmployeeForm from "../../components/EmployeeContent/EmployeeForm/EmployeeForm";

import "../../components/EmployeeContent/Header/Header.css"
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateEmployee } from "../../store/employee/employeeReducer";

const sampleEmployee = {
    name: "John",
    dateOfJoining: "2025-01-23",
    experience: 3,
    department: "Dept 1",
    role: "HR",
    status: "Active",
    employeeId: "dfuy54g85478d8937",
    address: {
        line1: "22nd",
        line2: "Baker Street",
        houseNo: "22B",
        pincode: "987890"
    }
}

const UpdateEmployee = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    
    const employees = useAppSelector(state => state.employee.employees )
    let employee = employees.filter((singleEmployee) => singleEmployee.id == id )[0]
    const [values, setValues] = useState({
        id: employee.id,
        name: employee.name,
        DateOfJoining: employee.dateOfJoining,
        experience: employee.experience,
        department: employee.department,
        role: employee.role,
        status: employee.status,
        departmentId: employee.departmentId,
        addressLine1: employee.address.line1,
        addressLine2: employee.address.line2,
        houseNo: employee.address.houseNo,
        pincode: employee.address.pincode,
        employeeId: employee.employeeId,
        email: employee.email,
        password: '',
        age: employee.age,
    });

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    };

    const updateEmployeeClick = (e: React.FormEvent) => {
        dispatch( updateEmployee({
                    id: employee.id,
                    name: values.name,
                    dateOfJoining: values.DateOfJoining,
                    experience: Number(values.experience),
                    role: values.role,
                    status: values.status,
                    employeeId: employee.id,
                    departmentId: values.departmentId,
                    email: values.email,
                    password: employee.password,
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
        e.preventDefault();
    }
  return (
    <div className="content-body">
        <div className="content-body__content">
            <h1 className="content-body__header">
                  Edit Employee 
            </h1>
            <form className="content-body__form">
                <EmployeeForm 
                    values={values}
                    onChange={(field, value) => 
                        setValues({
                            ...values,
                            [field]: value
                        })
                    }
                    isEdit={true}
                />
                <div className="content-body__form__submission">
                    <Button buttonName="Update" variant="create-employee--create" onClick={updateEmployeeClick}/>
                    <Button type="button" buttonName="Cancel" variant="create-employee--close" onClick={handleCancel}/>
                </div>
            </form>
        </div>
    </div>
  );
};

export default UpdateEmployee;
