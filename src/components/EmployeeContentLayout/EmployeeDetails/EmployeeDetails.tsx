import { useParams, useSearchParams } from "react-router-dom";

import "../Header/Header.css"
import "../EmployeeContentLayout.css"
import { useRef } from "react";

const sampleEmployee = {
    name: "John",
    joining_date: "2025-01-23",
    experience: 3,
    role: "HR",
    status: "ACTIVE",
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
                <h1 className="content-body__header">
                    Employee Details 
                </h1>
                <div className="content-body__form">
                    <div>
                        <div className="header">
                            <h3>Employee Details</h3>
                        </div>
                        <h4>employee id: {id}</h4>
                        <div className="content" style={{display: "flex", flexDirection: "row", gap:"10px"}}>
                            <div className="employee-detail">
                                <h6></h6>
                            </div>
                            <div className="employee-detail"></div>
                            <div className="employee-detail"></div>
                            <div className="employee-detail"></div>
                            <div className="employee-detail"></div>
                            <div className="employee-detail"></div>
                            <div className="employee-detail"></div>

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