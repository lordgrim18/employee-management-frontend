import React from 'react';
import './EmployeeLayout.css';

const EmployeeLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="employee-layout">
            {children}
        </div>
    )

}

export default EmployeeLayout;