import "./Multiinput.css";

import Input from "../Input/Input";

const MultiInput = ({
  variant,
  labelName,
  inputs,
}: {
  variant: string;
  labelName: string;
  inputs: { id: string; placeholder: string }[];
}) => {
  return (
    <div className={`form-multi-element form-multi-element--${variant}`}>
        <label>{labelName}</label>
      {inputs.map((input) => {
        return (
          <Input
            inputId={input.id}
            inputType="text"
            labelName=""
            variant={variant}
            inputPlaceholder={input.placeholder}
          />
        );
      })}
    </div>
  );
};

export default MultiInput;
