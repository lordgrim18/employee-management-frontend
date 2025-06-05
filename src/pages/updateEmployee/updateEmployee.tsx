
import { useNavigate, useParams } from "react-router-dom";

import "../../components/EmployeeContent/Header/Header.css"
import Button from "../../components/Button/Button";
import EmployeeForm from "../../components/EmployeeContent/EmployeeForm/EmployeeForm";
import { useGetSingleEmployeeQuery, useUpdateEmployeeMutation } from "../../api-service/employees/employees.api";
import useEmployeeFormValues, { transformFormValuesToEmployee } from "../../hooks/useEmployeeFormValues";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useState } from "react";

const UpdateEmployee = () => {
    const {id} = useParams();
    const [isError, setIsError] = useState(true);
    const [error, setError] = useState("");
    
    const {data: employee, isLoading: isEmployeesLoading, error: employeeError} = useGetSingleEmployeeQuery({id})

    const navigate = useNavigate();
    const {values, setValues} = useEmployeeFormValues(employee)

    const [updateEmployee, {isLoading: isEmployeeUpdating }] = useUpdateEmployeeMutation();

    if (employeeError) {
        console.log(employeeError)
        if ((employeeError as FetchBaseQueryError).status === 401) {
            localStorage.removeItem("token");
            navigate("/")
        }
    }

    const handleCancel = () => {
        navigate(-1);
    };

    const updateIsError = (type: boolean) => {
        setIsError(type);
    }

    const updateEmployeeClick = (e: React.FormEvent) => {
        e.preventDefault();
        updateEmployee({
            id: id,
            ...transformFormValuesToEmployee(values)
        })
        .unwrap()
        .then((response) => {
        console.log("employee updated");
        navigate("/employees");
        })
        .catch((error) => {
            console.log(error)
            if (error.status === 401) {
                localStorage.removeItem("token");
                navigate("/")
            } else {
                error.data.error.includes("duplicate") ? setError("Email already in use. Try a different email.") : setError(error.data.error)
            }
        })
    };

  return (
        <>
            <h1 className="content-body__header">
                  Edit Employee 
            </h1>
            <div className="content-body__form-wrapper">
                <form className="content-body__form">
                    {isEmployeesLoading ? (
                        <p style={{color: "green"}}>Loading employee...</p>
                    ) : employee ? (
                    <>
                        <EmployeeForm 
                            values={values}
                            onChange={(field, value) => 
                                setValues({
                                    ...values,
                                    [field]: value
                                })
                            }
                            isEdit={true}
                            updateIsError={updateIsError}
                        />
                        {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>
                        }
                        <div className="content-body__form__submission">
                            <Button buttonName="Update" variant="create-employee--create" onClick={updateEmployeeClick} disabled={isEmployeeUpdating || isError}/>
                            <Button type="button" buttonName="Cancel" variant="create-employee--close" onClick={handleCancel} disabled={isEmployeeUpdating}/>
                        </div>
                    </>
                    ) : (<p style={{color: "red", textAlign: "center"}}>No Employee found For id - <strong>{id}</strong></p>)}
                    
                </form>
            </div>
    </>
  );
};

export default UpdateEmployee;
