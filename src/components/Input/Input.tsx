import "./Input.css";

const Input = ({
  inputId,
  inputType,
  labelName,
  variant,
  inputPlaceholder,
  value,
  onChange,
  disabled = false
}: {
  inputId: string;
  inputType: string;
  labelName: string;
  variant: string;
  inputPlaceholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
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
      />
    </div>
  );
};

export default Input;
