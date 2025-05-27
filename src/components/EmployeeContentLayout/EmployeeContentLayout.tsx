import './EmployeeContentLayout.css';


const MainContent = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="content-body">
            <div className="content-body__content">
                {children}
            </div>
        </div>
    )

}

export default MainContent;