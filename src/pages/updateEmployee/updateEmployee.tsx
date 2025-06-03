import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import EmployeeForm from "../../components/EmployeeContent/EmployeeForm/EmployeeForm";

import "../../components/EmployeeContent/Header/Header.css"
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleEmployeeQuery, useUpdateEmployeeMutation } from "../../api-service/employees/employees.api";

const UpdateEmployee = () => {
    const {id} = useParams();
    const {data: employee, isLoading: isEmployeesLoading, error: employeeError} = useGetSingleEmployeeQuery({id})

    const navigate = useNavigate();
    const [values, setValues] = useState({
        id: '',
        name: '',
        dateOfJoining: '',
        experience: '' as unknown as number,
        departmentId: '' as unknown as number,
        role: '',
        status: '',
        addressLine1: '',
        addressLine2: '',
        houseNo: '',
        pincode: '',
        employeeId: '',
        email: '',
        // password: '',
        age: '' as unknown as number,
    });

    const [updateEmployee, {isLoading: isEmployeeUpdating }] = useUpdateEmployeeMutation();
    
    // const [values, setValues] = useState({
    //     id: employee.id,
    //     name: employee.name,
    //     dateOfJoining: employee.dateOfJoining,
    //     experience: employee.experience,
    //     department: employee.department,
    //     role: employee.role,
    //     status: employee.status,
    //     departmentId: employee.departmentId,
    //     addressLine1: employee.address.line1,
    //     addressLine2: employee.address.line2,
    //     houseNo: employee.address.houseNo,
    //     pincode: employee.address.pincode,
    //     employeeId: employee.employeeId,
    //     email: employee.email,
    //     password: '',
    //     age: employee.age,
    // });

    useEffect(() => {
        if (employee) 
            setValues({
                id: employee.id,
                name: employee.name,
                dateOfJoining: employee.dateOfJoining,
                experience: employee.experience,
                role: employee.role,
                status: employee.status,
                departmentId: employee.departmentId,
                addressLine1: employee.address.line1,
                addressLine2: employee.address.line2,
                houseNo: employee.address.houseNo,
                pincode: employee.address.pincode,
                employeeId: employee.employeeId,
                email: employee.email,
                // password: '',
                age: employee.age,
        })
    }, [employee])

    if (employeeError) {
        console.log(employeeError)
        if (employeeError.status === 401) {
            localStorage.removeItem("token");
            navigate("/")
        }
    }

    const handleCancel = () => {
        navigate(-1);
    };

    const updateEmployeeClick = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(values);
        updateEmployee({
            id: id,
            name: values.name,
            dateOfJoining: values.dateOfJoining,
            experience: Number(values.experience),
            role: values.role,
            status: values.status,
            departmentId: Number(values.departmentId),
            email: values.email,
            age: Number(values.age),
            address: {
                line1: values.addressLine1,
                line2: values.addressLine2 || '',
                houseNo: values.houseNo || '',
                pincode: values.pincode
            }
        })
        .unwrap()
        .then((response) => {
        console.log("employee updated");
        navigate("/employees");
        })
        .catch((error) => {
            console.log(error)
            
        })
    }

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
                        />
                        <div className="content-body__form__submission">
                            <Button buttonName="Update" variant="create-employee--create" onClick={updateEmployeeClick} disabled={isEmployeeUpdating}/>
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
