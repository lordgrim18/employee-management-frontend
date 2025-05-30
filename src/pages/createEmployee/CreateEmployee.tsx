import { useState } from "react";
import Button from "../../components/Button/Button";
import EmployeeForm from "../../components/EmployeeContent/EmployeeForm/EmployeeForm";

import "../../components/EmployeeContent/Header/Header.css"
import { useNavigate } from "react-router-dom";


const CreateEmployee = () => {
    const [values, setValues] = useState({
        employeeName: "",
        joiningDate: "",
        experience: 0,
        department: "",
        role: "",
        status: "",
        addressLine1: "",
        addressLine2: "",
        houseNo: "",
        pincode: "",
        employeeId: "",
    });

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    };

    const createEmployee = (e: React.FormEvent) => {
        console.log(values);
        e.preventDefault();
    }
  return (
    <div className="content-body">
        <div className="content-body__content">
            <h1 className="content-body__header">
                  Create Employee 
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
                    isEdit={false}
                />
                <div className="content-body__form__submission">
                    <Button buttonName="Create" variant="create-employee--create" onClick={createEmployee}/>
                    <Button type="button" buttonName="Cancel"  variant="create-employee--close" onClick={handleCancel}/>
                </div>
            </form>
        </div>
    </div>
  );
};

export default CreateEmployee;
