import Sidebar from '../../components/Sidebar/Sidebar';
import EmployeeContentLayout from '../../components/EmployeeContentLayout/EmployeeContentLayout';
import EmployeeLayout from '../../components/EmployeeLayout/EmployeeLayout';
import Header from '../../components/EmployeeContentLayout/Header/Header';
import EmployeeForm from '../../components/EmployeeContentLayout/EmployeeForm/EmployeeForm';

const CreateEmployee = () => {
    return (
        <EmployeeLayout>
            <EmployeeContentLayout>
                <Header title='Create Employee' />
                <EmployeeForm />
            </EmployeeContentLayout>
        </EmployeeLayout>
    )
}

export default CreateEmployee;