import { Link, useSearchParams } from "react-router-dom";

import "./EmployeeList.css";
import Select from "../../Select/Select";
import EmployeeListItem from "./EmployeeListItem/EmployeeListItem";
import DeleteConfirmPopup from "../DeleteConfirmPopup/DeleteConfirmPopup";
import { useState } from "react";
import createIcon from '../../../assets/icons/plus.svg'
import HeaderButton from "../Header/HeaderButton/HeaderButton";

const sampleEmployeeList = [
  {
    id: 1,
    name: "John",
    joining_date: "2025-01-23",
    experience: 3,
    role: "HR",
    status: "Active",
    employeeId: "dfuy54g85478d8937",
    address: {
      line1: "22nd",
      line2: "Baker Street",
      houseNo: "22B",
      pincode: "987890",
    },
  },
  {
    id: 2,
    name: "Jane",
    joining_date: "2025-01-23",
    experience: 3,
    role: "HR",
    status: "Inactive",
    employeeId: "kg5903ej3uhg20943",
    address: {
      line1: "22nd",
      line2: "Baker Street",
      houseNo: "22B",
      pincode: "987890",
    },
  },
  {
    id: 3,
    name: "Mack",
    joining_date: "2025-01-23",
    experience: 3,
    role: "HR",
    status: "Active",
    employeeId: "f949h2948u3098g",
    address: {
      line1: "22nd",
      line2: "Baker Street",
      houseNo: "22B",
      pincode: "987890",
    },
  },
  {
    id: 4,
    name: "Max",
    joining_date: "2025-01-23",
    experience: 3,
    role: "HR",
    status: "Probation",
    employeeId: "nju3he3879e393e",
    address: {
      line1: "22nd",
      line2: "Baker Street",
      houseNo: "22B",
      pincode: "987890",
    },
  },
];

const EmployeeList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const statusFilter = searchParams.get("status");

  const handleDelete = () => {
    setShowPopup(true);
  };

  const handleDeleteConfirm = () => {
    console.log("deleting");
    setShowPopup(false);
  };

  const handleDeleteCancel = () => {
    setShowPopup(false);
  };
  return (
    <div className="content-body">
      <div className="content-body__content">
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
            <HeaderButton icon={createIcon} name="Create" variant="create-icon" />
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
          {(statusFilter
            ? sampleEmployeeList.filter(
                (sampleEmployee) => sampleEmployee.status === statusFilter
              )
            : sampleEmployeeList
          ).map((employee, index) => (
            <EmployeeListItem
              key={index}
              employee={employee}
              onClick={handleDelete}
            />
          ))}
        </div>
      </div>
      <DeleteConfirmPopup
        isOpen={showPopup}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
};

export default EmployeeList;
