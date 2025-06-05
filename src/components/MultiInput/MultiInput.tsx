import "./Multiinput.css";

import Input from "../Input/Input";

const MultiInput = ({
  variant,
  labelName,
  inputs,
}: {
  variant: string;
  labelName: string;
  inputs: { id: string; placeholder: string, value?: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }[];
}) => {
  return (
    <div className={`form-multi-element form-multi-element--${variant}`}>
        <label>{labelName}</label>
      {inputs.map((input, index) => {
        return (
          <Input
            key={index}
            inputId={input.id}
            inputType="text"
            labelName=""
            variant={variant}
            inputPlaceholder={input.placeholder}
            value={input.value}
            onChange={input.onChange}
          />
        );
      })}
    </div>
  );
};

export default MultiInput;
