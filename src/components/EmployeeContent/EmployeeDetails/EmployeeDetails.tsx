import { Link, useParams, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from "@fortawesome/free-solid-svg-icons";

import "../Header/Header.css";
import "../EmployeeContent.css";
import "./EmployeeDetails.css";
// import { useRef } from "react";
import EmployeeDetailsItem from "./EmployeeDetailsItem/EmployeeDetailsItem";

const sampleEmployee = {
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
        pincode: "987890"
    }
}

const EmployeeDetails = () => {
    const {id} = useParams();
    // const [searchParams, setSearchParams] = useSearchParams();

    // const inputRef = useRef<HTMLInputElement>(null);

    // const getParam = () => {
    //     const paramValue = searchParams.get("param");
    //     console.log(paramValue)
    // }

    // const setParam = () => {
    //     const newSearchParam = new URLSearchParams(searchParams);

    //     const newValue = inputRef.current ? inputRef.current.value : ''

    //     newSearchParam.set("param", newValue)

    //     setSearchParams(newSearchParam);
    // }

    return (
        <div className="content-body">
            <div className="content-body__content">
                <div className="content-body__header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>
                        Employee Details 
                    </h1>
                    <div className="content-body__header__functions">
                        <div className="content-body__header__functions-button">
                            <Link to="update" style={{textDecoration: "none"}}>
                                <button>
                                    <i className="header-button-icon"><FontAwesomeIcon icon={faPen} /></i>
                                    <div className="header-button-text">Edit</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="content-body__form">
                    <div>
                        <div className="employee-details-wrapper">
                            <div className="employee-details--container">
                                <EmployeeDetailsItem label="Employee Name"  value={sampleEmployee.name} />
                                <EmployeeDetailsItem label="Joining Date"  value={sampleEmployee.joining_date} />
                                <EmployeeDetailsItem label="Experience"  value={String(sampleEmployee.experience)} />
                                <EmployeeDetailsItem label="Role"  value={sampleEmployee.role} />
                            </div>
                            <hr />
                            <div className="employee-details--container">
                                <EmployeeDetailsItem label="Status" variant={`status ${sampleEmployee.status.toLowerCase()}`} value={sampleEmployee.status} />
                                <EmployeeDetailsItem label="Address"  values={sampleEmployee.address} />
                                <EmployeeDetailsItem label="Employee ID"  value={sampleEmployee.employeeId} />
                                <EmployeeDetailsItem label="" value="" />
                            </div>

                            {/* set and get for query params */}

                            {/* <div style={{display: "flex", gap: "10px"}}>
                                <button style={{height: "max-content"}} className="get-query-param" onClick={getParam}>Get</button>

                                <input type="text" ref={inputRef} />
                                <button style={{height: "max-content"}} className="set-query-param" onClick={setParam}>Set</button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;