import './MainContent.css';
import Header from './Header/Header';
import EmployeeForm from '../EmployeeForm/EmployeeForm';

const MainContent = () => {
    return(
        <>
            <div className="content-body">
                <div className="content-body__content">
                    <Header title='Create Employee' />
                    <EmployeeForm />
                </div>
            </div>
        </>
    )
}

export default MainContent;