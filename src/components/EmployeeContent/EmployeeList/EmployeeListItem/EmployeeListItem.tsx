import './EmployeeListItem.css'
import deleteIcon from '../../../../assets/icons/delete.svg'
import editIcon from '../../../../assets/icons/edit.svg'
import { useNavigate } from 'react-router-dom';
import type { MouseEventHandler } from 'react';

interface EmployeeListItemProps {
    id: number;
    name: string;
    joining_date: string;
    experience: number;
    role: string;
    status: string;
    employeeId: string;
    address: {
        line1: string;
        line2: string;
        houseNo: string;
        pincode: string;
    }
}

const EmployeeListItem = ({employee, onClick}: {employee: EmployeeListItemProps, onClick: MouseEventHandler<HTMLButtonElement>}) => {
    const navigate = useNavigate()

    return (
        <div className='employee-list-item'>
            <p>{employee.name}</p>
            <p className='employee-list-item--id'>{employee.employeeId}</p>
            <p>{employee.joining_date}</p>
            <p>{employee.role}</p>
            <p className={`employee-detail-value--status ${employee.status.toLowerCase()}`}>{employee.status}</p>
            <p>{employee.experience} Years</p>
            <div className='employee-actions'>
                <button type="button" style={{marginRight: "20px"}} onClick={onClick}><img src={deleteIcon} alt="delete" /></button>
                <button><img src={editIcon} alt="edit" onClick={() => navigate(`${employee.id}/update`) }/></button>
            </div>
        </div>
    )
}

export default EmployeeListItem;
