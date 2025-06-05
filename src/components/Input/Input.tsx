import "./Input.css";

const Input = ({
  inputId,
  inputType,
  labelName,
  variant,
  inputPlaceholder,
  value,
  onChange,
  disabled = false,
  required = true,
  error,
}: {
  inputId: string;
  inputType: string;
  labelName: string;
  variant: string;
  inputPlaceholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}) => {
  return (
    <div className={`form-element form-element--${variant}`}>
      <label htmlFor={inputId}>{labelName}</label>
      <input
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required = {required}
      />
      {<span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
  );
};

export default Input;
