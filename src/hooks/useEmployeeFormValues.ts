import { useEffect, useState } from "react";

import type { Employee, Role, Status } from "../store/employee/employee.types";


export interface EmployeeFormValues {
    name: string;
    dateOfJoining: string;
    experience: number;
    departmentId: number;
    role: Role;
    status: Status;
    addressLine1: string;
    addressLine2?: string;
    houseNo?: string;
    pincode: string;
    employeeId?: string;
    email: string;
    age: number;
    password?: string;
}

const getDefaultEmployeeFormValues = (): EmployeeFormValues => ({
    name: '',
    dateOfJoining: '',
    experience: '' as unknown as number,
    departmentId: '' as unknown as number,
    role: '' as unknown as Role,
    status: '' as unknown as Status,
    addressLine1: '',
    addressLine2: '',
    houseNo: '',
    pincode: '',
    employeeId: '',
    email: '',
    password: '', 
    age: '' as unknown as number,
})

const transformEmployeeToFormValues = (employee: Employee): EmployeeFormValues => {
    return {
        name: employee.name,
        dateOfJoining: employee.dateOfJoining,
        experience: employee.experience,
        role: employee.role,
        status: employee.status,
        departmentId: employee.departmentId,
        addressLine1: employee.address.line1,
        addressLine2: employee.address.line2 || '',
        houseNo: employee.address.houseNo || '',
        pincode: employee.address.pincode,
        employeeId: employee.employeeId,
        email: employee.email,
        age: employee.age,
    }
}

export const transformFormValuesToEmployee = (formValues: EmployeeFormValues) => {
    return {
        name: formValues.name,
        dateOfJoining: formValues.dateOfJoining,
        experience: Number(formValues.experience),
        role: formValues.role,
        status: formValues.status,
        departmentId: Number(formValues.departmentId),
        email: formValues.email,
        age: Number(formValues.age),
        address: {
            line1: formValues.addressLine1,
            line2: formValues.addressLine2 || '',
            houseNo: formValues.houseNo || '',
            pincode: formValues.pincode
        }
    }
}

const useEmployeeFormValues = (employee?: Employee | undefined) => {
    const [values, setValues] = useState<EmployeeFormValues>(
        getDefaultEmployeeFormValues
    );

    useEffect(() => {
        if (employee) {
            setValues(transformEmployeeToFormValues(employee));
        }
    }, [employee]);

    return { values, setValues };
};

export default useEmployeeFormValues;