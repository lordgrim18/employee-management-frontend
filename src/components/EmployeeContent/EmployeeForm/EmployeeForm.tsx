import "./EmployeeForm.css";
import "../EmployeeContent.css";

import Input from "../../Input/Input";
import Select from "../../Select/Select";
import MultiInput from "../../MultiInput/MultiInput";
import VariableSelect from "../../VariableSelect/VariableSelect";
import { useGetDepartmentListQuery } from "../../../api-service/department/department.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { EmployeeFormValues } from "../../../hooks/useEmployeeFormValues";

const EmployeeForm = ({
  values,
  onChange,
  isEdit,
}: {
  values: EmployeeFormValues;
  onChange: (field: string, value: string) => void;
  isEdit: boolean;
}) => {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    // name: '',
    // dateOfJoining: '',
    // experience: '',
    // departmentId: '',
    // role: '',
    // status: '',
    // addressLine1: '',
    // addressLine2: '',
    // houseNo: '',
    // pincode: '',
    email: '',
    password: '', 
    // age: '',
  })
  const [isError, setIsError] = useState(true);

  const {data: departmentList, isLoading: isDepartmentLoading, error: departmentsError} = useGetDepartmentListQuery({});

  useEffect(() => {
    if (values.email && !emailRegex.test(values.email)) 
      setErrors((prev) => ({
        ...prev,
        email: "Invalid Email"
      }))
    else 
      setErrors((prev) => ({
        ...prev,
        email: ""
      }))
  }, [values.email])

  useEffect(() => {
    if(!isEdit){
        if (values.password && values.password.length < 5)
          setErrors((prev) => ({
            ...prev,
            password: "Invalid Password"
          }))
        else 
          setErrors((prev) => ({
            ...prev,
            password: ""
          }))
    }
    
  }, [values.password])

  useEffect(() => {
      ( errors.email || errors.password ) ? setIsError(true) : setIsError(false)
    })

  if (departmentsError) {
        console.log(departmentsError)
        if ((departmentsError as FetchBaseQueryError).status === 401) {
            localStorage.removeItem("token");
            navigate("/")
        }
    }

  return (
    <div className="content-body__form__fields">
      <Input
        inputId="employee-name"
        inputType="text"
        labelName="Employee Name"
        variant="employee-create"
        inputPlaceholder="Employee Name"
        value={values.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <Input
        inputId="employee-joining-date"
        inputType="date"
        labelName="Joining Date"
        variant="employee-create"
        inputPlaceholder="Joining Date (yyyy-mm-dd)"
        value={values.dateOfJoining}
        onChange={(e) => onChange("dateOfJoining", e.target.value)}
      />
      <Input
        inputId="employee-experience"
        inputType="number"
        labelName="Experience (Yrs)"
        variant="employee-create"
        inputPlaceholder="2"
        value={values.experience}
        onChange={(e) => onChange("experience", e.target.value)}
      />
      <VariableSelect
        selectId="employee-department"
        labelName="Department"
        variant="employee-create"
        placeholderItem="Choose Department"
        disabled={isDepartmentLoading}
        items={ !isDepartmentLoading ? departmentList : [] }
        value={values.departmentId}
        onChange={(e) => onChange("departmentId", e.target.value)}
      />
      <Select
        selectId="employee-role"
        labelName="Role"
        variant="employee-create"
        placeholderItem="Choose Role"
        items={["HR", "DEVELOPER", "UI", "UX"]}
        value={values.role}
        onChange={(e) => onChange("role", e.target.value)}
      />
      <Select
        selectId="employee-status"
        labelName="Status"
        variant="employee-create"
        placeholderItem="Status"
        items={["ACTIVE", "INACTIVE", "PROBATION"]}
        value={values.status}
        onChange={(e) => onChange("status", e.target.value)}
      />
      <Input
        inputId="employee-email"
        inputType="text"
        labelName="Email"
        variant="employee-create"
        inputPlaceholder="user@email.com"
        value={values.email}
        onChange={(e) => onChange("email", e.target.value)}
        error={errors.email}
      />
      {!isEdit && (
        <Input
          inputId="employee-password"
          inputType="password"
          labelName="Password"
          variant="employee-create"
          inputPlaceholder="password"
          value={values.password}
          onChange={(e) => onChange("password", e.target.value)}
          error={errors.password}
        />
      )}
      <Input
        inputId="employee-age"
        inputType="number"
        labelName="Age (Yrs)"
        variant="employee-create"
        inputPlaceholder="26"
        value={values.age}
        onChange={(e) => onChange("age", e.target.value)}
      />
      {isEdit && (
        <Input
          inputId="employee-id"
          inputType="text"
          labelName="Employee ID"
          variant="employee-create"
          inputPlaceholder=""
          value={values.employeeId}
          disabled={true}
        />
      )}
      <MultiInput
        variant="employee-create"
        labelName="Address"
        inputs={[
          {
            id: "houseNo",
            placeholder: "Flat No. / House No.",
            value: values.houseNo,
            onChange: (e) => onChange("houseNo", e.target.value),
          },
          {
            id: "line1",
            placeholder: "Address Line 1",
            value: values.addressLine1,
            onChange: (e) => onChange("addressLine1", e.target.value),
          },
          {
            id: "line2",
            placeholder: "Address Line 2",
            value: values.addressLine2,
            onChange: (e) => onChange("addressLine2", e.target.value),
          },
          {
            id: "pincode",
            placeholder: "Pincode",
            value: values.pincode,
            onChange: (e) => onChange("pincode", e.target.value),
          },
        ]}
      />
    </div>
  );
};

export default EmployeeForm;
