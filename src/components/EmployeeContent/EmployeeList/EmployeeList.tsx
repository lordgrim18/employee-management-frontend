import { useSearchParams } from "react-router-dom";

import "./EmployeeList.css";
import Select from "../../Select/Select";
import EmployeeListItem from "./EmployeeListItem/EmployeeListItem";
import DeleteConfirmPopup from "../DeleteConfirmPopup/DeleteConfirmPopup";
import { useState } from "react";
import createIcon from '../../../assets/icons/plus.svg'
import HeaderButton from "../Header/HeaderButton/HeaderButton";
import type { Employee } from "../../../store/employee/employee.types";
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from "../../../api-service/employees/employees.api";
import Button from "../../Button/Button";

const EmployeeList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [deleteId, setDeleteId] = useState(Number());
  const { data: employeesList, isLoading: isEmployeesLoading, error: employeesError } = useGetEmployeeListQuery({});
  const [deleteEmployee, {isLoading: isEmployeeDeleting}] = useDeleteEmployeeMutation();

  const statusFilter = searchParams.get("status");

  const handleDelete = ({id}: {id: number}) => {
    setShowPopup(true);
    setDeleteId(id);
  };

  const handleDeleteConfirm = () => {
    console.log("deleting");
    deleteEmployee({id: deleteId })
    .unwrap()
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
    setShowPopup(false);
  };

  const handleDeleteCancel = () => {
    setShowPopup(false);
  };

  const filteredEmployees = employeesList
    ? (statusFilter
        ? employeesList.filter((singleEmployee: Employee) => singleEmployee.status === statusFilter.toUpperCase())
        : employeesList
      )
    : [];

  return (
      <>
        <div
          className="content-body__header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Employee List</h1>
          <div className="content-body__header__functions">
            <div className="filter-wrapper">
              <Select
                commonClass="`"
                variant="filter"
                selectId="filter"
                labelName="Filter By:"
                placeholderItem="Status"
                items={["Active", "Inactive", "Probation"]}
                value={statusFilter ? statusFilter : '' }
                onChange={(e) => {
                  const newStatusFilterParam = new URLSearchParams(
                    searchParams
                  );
                  e.target.value === ""
                    ? newStatusFilterParam.delete("status")
                    : newStatusFilterParam.set("status", e.target.value);
                  setSearchParams(newStatusFilterParam);
                }}
              />
            </div>
            <HeaderButton icon={createIcon} name="Create" variant="create-icon" linkTo="create"/>
          </div>
        </div>
        <div className="employee-list-container">
          <div className="employee-list-header">
            <p>Employee Name</p>
            <p>Employee ID</p>
            <p>Joining Date</p>
            <p>Role</p>
            <p className="employee-list-header-status">Status</p>
            <p>Experience</p>
            <p>Action</p>
          </div>
          {isEmployeesLoading ? (
              <p style={{color: "green", textAlign: "center"}}>Loading employees...</p>
          ) : employeesError ? (
            <div style={{color: "red", textAlign: "center"}}>
              <p>Error loading employees. Please try again later.</p>
            </div>
          ) : filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee: Employee, index: number) => (
              <EmployeeListItem
                key={employee.id || index}
                employee={employee}
                onClick={() => handleDelete({id: employee.id})}
              />
            ))
          ) : (
            <div style={{textAlign: "center"}}>
              No employees found.
            </div>
          )}
        </div>
      <DeleteConfirmPopup
        isOpen={showPopup}
        isEmployeeDeleting={isEmployeeDeleting}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};

export default EmployeeList;
