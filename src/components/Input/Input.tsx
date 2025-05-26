import "./Input.css";

const Input = ({
  inputId,
  inputType,
  labelName,
  variant,
  inputPlaceholder,
}: {
  inputId: string;
  inputType: string;
  labelName: string;
  variant: string;
  inputPlaceholder: string;
}) => {
  return (
    <div className={`form-element form-element--${variant}`}>
      <label htmlFor={inputId}>{labelName}</label>
      <input type={inputType} id={inputId} placeholder={inputPlaceholder} />
    </div>
  );
};

export default Input;
