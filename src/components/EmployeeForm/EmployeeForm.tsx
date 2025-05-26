import "./EmployeeForm.css";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import MultiInput from "../MultiInput/MultiInput";

const EmployeeForm = () => {
  return (
    <div className="content-body__form">
      <div className="content-body__form__fields">
        <Input
          inputId="employee-name"
          inputType="text"
          labelName="Employee Name"
          variant="employee-create"
          inputPlaceholder="Employee Name"
        />
        <Input
          inputId="employee-joining-date"
          inputType="text"
          labelName="Joining Date"
          variant="employee-create"
          inputPlaceholder="Joining Date"
        />
        <Input
          inputId="employee-experience"
          inputType="text"
          labelName="Experience (Yrs)"
          variant="employee-create"
          inputPlaceholder="2"
        />
        <Select
          selectId="employee-department"
          labelName="Department"
          variant="employee-create"
          placeholderItem="Choose Department"
          items={["Dept 1", "Dept2", "Dept3"]}
        />
        <Select
          selectId="employee-role"
          labelName="Role"
          variant="employee-create"
          placeholderItem="Choose Role"
          items={["HR", "DEVELOPER", "UI", "UX"]}
        />
        <Select
          selectId="employee-status"
          labelName="Status"
          variant="employee-create"
          placeholderItem="Status"
          items={["ACTIVE, INACTIVE, PROBATION"]}
        />
        <MultiInput
          variant="employee-create"
          labelName="Address"
          inputs={[
            { id: "houseNo", placeholder: "Flat No. / House No." },
            { id: "line1", placeholder: "Address Line 1" },
            { id: "line2", placeholder: "Address Line 2" },
          ]}
        />
      </div>
      <div className="content-body__form__submission">
        <Button buttonName="Create" variant="create-employee--create" />
        <Button buttonName="Cancel" variant="create-employee--close" />
      </div>
    </div>
  );
};

export default EmployeeForm;
