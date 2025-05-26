import "./Select.css";

const Select = ({
  variant,
  selectId,
  labelName,
  placeholderItem,
  items,
}: {
  variant: string;
  selectId: string;
  labelName: string;
  placeholderItem: string;
  items: string[];
}) => {
  return (
    <div className={`form-element form-element--${variant}`}>
      <label htmlFor={selectId}>{labelName}</label>

      <select id={selectId}>
        <option value="" className="dropdown-placeholder">
          {placeholderItem}
        </option>
        {items.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
