import './EmployeeForm.css'

import Input from '../Input/Input';

const EmployeeForm = () => {
    return (
        <div className="content-body__form">
            <div className="content-body__form__fields">
                <Input inputId='employee-name' inputType='text' labelName='Employee Name' variant='employee-create' inputPlaceholder='Employee Name' />
            </div>
            <div className="content-body__form__submission">
                <button>Create</button>
                <button>Cancel</button>
            </div>
            
        </div>
        
    )
}

export default EmployeeForm;