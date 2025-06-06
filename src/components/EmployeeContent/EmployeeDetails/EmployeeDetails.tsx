import { Link, useParams, useSearchParams } from "react-router-dom";
import editIcon from '../../../assets/icons/pencil.svg'

import "../Header/Header.css";
import "../EmployeeContent.css";
import "./EmployeeDetails.css";
// import { useRef } from "react";
import EmployeeDetailsItem from "./EmployeeDetailsItem/EmployeeDetailsItem";
import HeaderButton from "../Header/HeaderButton/HeaderButton";
import { useGetSingleEmployeeQuery } from "../../../api-service/employees/employees.api";

const EmployeeDetails = () => {
    const {id} = useParams();
    const {data: validEmployee} = useGetSingleEmployeeQuery({id})

    return (
            <>
                <div className="content-body__header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>
                        Employee Details 
                    </h1>
                    { validEmployee && 
                    <div className="content-body__header__functions">
                        <HeaderButton icon={editIcon} name="Edit" linkTo="update" disabled={validEmployee ? false : true}/>
                    </div>
                    }
                </div>
                <div className="content-body__form-wrapper">
                    <div className="content-body__form">
                        <div>
                            { validEmployee ?
                                (<div className="employee-details-wrapper">
                                    <div className="employee-details--container">
                                        <EmployeeDetailsItem label="Employee Name"  value={validEmployee.name} />
                                        <EmployeeDetailsItem label="Joining Date"  value={validEmployee.dateOfJoining} />
                                        <EmployeeDetailsItem label="Experience"  value={String(validEmployee.experience)} />
                                        <EmployeeDetailsItem label="Role"  value={validEmployee.role} />
                                    </div>
                                    <hr />
                                    <div className="employee-details--container">
                                        <EmployeeDetailsItem label="Status" variant={`status ${validEmployee.status.toLowerCase()}`} value={validEmployee.status} />
                                        <EmployeeDetailsItem label="Address"  values={validEmployee.address} />
                                        <EmployeeDetailsItem label="Employee ID"  value={validEmployee.employeeId} />
                                        <EmployeeDetailsItem label="" value="" />
                                    </div>

                                </div>) : (<p style={{color: "red", textAlign: "center"}}>No Employee found For id - <strong>{id}</strong></p>)
                            }
                        </div>
                    </div>
                </div>
        </>
    );
};

export default EmployeeDetails;