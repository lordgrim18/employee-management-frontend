import { useNavigate } from "react-router-dom";

import "../../components/EmployeeContent/Header/Header.css";
import Button from "../../components/Button/Button";
import EmployeeForm from "../../components/EmployeeContent/EmployeeForm/EmployeeForm";
import { useCreateEmployeeMutation } from "../../api-service/employees/employees.api";
import useEmployeeFormValues, { transformFormValuesToEmployee } from "../../hooks/useEmployeeFormValues";
import { useState } from "react";

const CreateEmployee = () => {
  const [isError, setIsError] = useState(true);
  const [error, setError] = useState("");
  const {values, setValues} = useEmployeeFormValues() 
  const [createEmployee, {isLoading}] = useCreateEmployeeMutation();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const updateIsError = (type: boolean) => {
    setIsError(type);
  }


  const createEmployeeClick = async (e: React.FormEvent) => {
    e.preventDefault();
    createEmployee({
            ...transformFormValuesToEmployee(values),
            password: values.password
    })
    .unwrap()
    .then((response) => {
      console.log("employee created");
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
        <h1 className="content-body__header">Create Employee</h1>
        <div className="content-body__form-wrapper">
          <form className="content-body__form" onSubmit={createEmployeeClick}>
            <EmployeeForm
              values={values}
              onChange={(field, value) =>
                setValues({
                  ...values,
                  [field]: value,
                })
              }
              isEdit={false}
              updateIsError={updateIsError}
            />
            {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>
            }
            <div className="content-body__form__submission">
              <Button
                buttonName="Create"
                variant="create-employee--create"
                // onClick={createEmployeeClick}
                disabled={ isLoading || isError }
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
