import "./EmployeeForm.css";
import "../EmployeeContent.css"

import Input from "../../Input/Input";
import Select from "../../Select/Select";
import MultiInput from "../../MultiInput/MultiInput";

const EmployeeForm = ({
  values,
  onChange,
  isEdit,
}: {
  values: {
    employeeName: string;
    joiningDate: string;
    experience: number;
    department: string;
    role: string;
    status: string;
    addressLine1: string;
    addressLine2: string;
    houseNo: string;
    pincode: string;
    employeeId: string;
  };
  onChange: (field: string, value: string) => void;
  isEdit: boolean;
}) => {
  return (
          <div className="content-body__form__fields">
            <Input
              inputId="employee-name"
              inputType="text"
              labelName="Employee Name"
              variant="employee-create"
              inputPlaceholder="Employee Name"
              value={values.employeeName}
              onChange={(e) => onChange("employeeName", e.target.value)}
            />
            <Input
              inputId="employee-joining-date"
              inputType="text"
              labelName="Joining Date"
              variant="employee-create"
              inputPlaceholder="Joining Date (yyyy-mm-dd)"
              value={values.joiningDate}
              onChange={(e) => onChange("joiningDate", e.target.value)}
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
            <Select
              selectId="employee-department"
              labelName="Department"
              variant="employee-create"
              placeholderItem="Choose Department"
              items={["Dept 1", "Dept2", "Dept3"]}
              value={values.department}
              onChange={(e) => onChange("department", e.target.value)}
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
                { id: "houseNo", placeholder: "Flat No. / House No.", value: values.houseNo, onChange: (e) => onChange("houseNo", e.target.value) },
                { id: "line1", placeholder: "Address Line 1", value: values.addressLine1, onChange:(e) => onChange("addressLine1", e.target.value) },
                { id: "line2", placeholder: "Address Line 2", value: values.addressLine2, onChange:(e) => onChange("addressLine2", e.target.value) },
                { id: "pincode", placeholder: "Pincode", value: values.pincode, onChange:(e) => onChange("pincode", e.target.value) },
              ]}
            />
            {isEdit && <Input
                          inputId="employee-id"
                          inputType="text"
                          labelName="Employee ID"
                          variant="employee-create"
                          inputPlaceholder=""
                          value={values.employeeId}
                          disabled={true}
                        />
              }
          </div>
  );
};

export default EmployeeForm;
