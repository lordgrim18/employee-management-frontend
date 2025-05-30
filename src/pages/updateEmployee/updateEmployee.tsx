import { useState } from "react";
import Button from "../../components/Button/Button";
import EmployeeForm from "../../components/EmployeeContent/EmployeeForm/EmployeeForm";

import "../../components/EmployeeContent/Header/Header.css"
import { useNavigate } from "react-router-dom";

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
    const [values, setValues] = useState({
        name: sampleEmployee.name,
        DateOfJoining: sampleEmployee.dateOfJoining,
        experience: sampleEmployee.experience,
        department: sampleEmployee.department,
        role: sampleEmployee.role,
        status: sampleEmployee.status,
        addressLine1: sampleEmployee.address.line1,
        addressLine2: sampleEmployee.address.line2,
        houseNo: sampleEmployee.address.houseNo,
        pincode: sampleEmployee.address.pincode,
        employeeId: sampleEmployee.employeeId
    });

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    };

    const updateEmployee = (e: React.FormEvent) => {
        console.log(values);
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
                    <Button buttonName="Update" variant="create-employee--create" onClick={updateEmployee}/>
                    <Button type="button" buttonName="Cancel" variant="create-employee--close" onClick={handleCancel}/>
                </div>
            </form>
        </div>
    </div>
  );
};

export default UpdateEmployee;
