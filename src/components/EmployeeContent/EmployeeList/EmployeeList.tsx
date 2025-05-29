import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import "./EmployeeList.css"
import Select from '../../Select/Select';
import EmployeeListItem from './EmployeeListItem/EmployeeListItem';

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
            pincode: "987890"
        }
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
            pincode: "987890"
        }
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
            pincode: "987890"
        }
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
            pincode: "987890"
        }
    },
]

const EmployeeList = () => {
    return (
        <div className="content-body">
            <div className="content-body__content">
                <div className="content-body__header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>
                        Employee List 
                    </h1>
                    <div className="content-body__header__functions">
                        <div className="filter-wrapper">
                            <Select commonClass='`' variant='filter' selectId='filter' labelName='Filter By:' placeholderItem='Status' items={["Active", "Inactive", "Probation"]}   />
                        </div>
                        <div className="content-body__header__functions-button">
                            <Link to="create" style={{textDecoration: "none"}}>
                                <button>
                                        <i className="header-button-icon create-icon"><FontAwesomeIcon icon={faPlus} /></i>
                                        <div className="header-button-text">Create</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='employee-list-container'>
                    <div className='employee-list-header'>
                        <p>Employee Name</p>
                        <p>Employee ID</p>
                        <p>Joining Date</p>
                        <p>Role</p>
                        <p className='employee-list-header-status'>Status</p>
                        <p>Experience</p>
                        <p>Action</p>
                    </div>
                    {sampleEmployeeList.map((employee, index) => (
                        <EmployeeListItem key={index} employee={employee} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;