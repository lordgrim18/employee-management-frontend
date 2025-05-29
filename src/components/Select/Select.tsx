import "./Select.css";

const  Select = ({
  commonClass="form-element",
  variant,
  selectId,
  labelName,
  placeholderItem,
  items,
  value,
  onChange,
}: {
  commonClass: string;
  variant: string;
  selectId: string;
  labelName: string;
  placeholderItem: string;
  items: string[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={`${commonClass} form-element--${variant}`}>
      <label htmlFor={selectId}>{labelName}</label>

      <select id={selectId} value={value} onChange={onChange}>
        <option value="" className="dropdown-placeholder">
          {placeholderItem}
        </option>
        {items.map((item, index) => {
          return <option key={index} value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
