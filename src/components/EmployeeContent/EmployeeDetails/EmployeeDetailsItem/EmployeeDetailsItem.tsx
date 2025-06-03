import "./EmployeeDetailsItem.css";

interface EmployeeDetailsItemProps {
  label: string;
  value?: string;
  values?: {line1: string, line2: string, houseNo: string, pincode: string};
  variant?: string;
}

const EmployeeDetailsItem = ({ label, value, values, variant }: EmployeeDetailsItemProps) => {
  return (
    <div className="employee-detail">
      <p className="employee-detail-label">{label}</p>
      {value && <span className={`employee-detail-value employee-detail-value--${variant}`}>{value} {label === 'Experience' ? 'Yrs' : ''}</span>}
      {values && <span className="employee-detail-value">
                <span className="employee-detail-value-multiple">{values.line1}, </span>
                <span className="employee-detail-value-multiple">{values.line2}, </span>
                <span className="employee-detail-value-multiple">{values.houseNo}, </span>
                <span className="employee-detail-value-multiple">{values.pincode} </span>
                </span>
      } 
    </div>
  );
};

export default EmployeeDetailsItem;
