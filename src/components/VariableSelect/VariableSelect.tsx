
const  VariableSelect = ({
  commonClass="form-element",
  variant,
  selectId,
  labelName,
  placeholderItem,
  items,
  value,
  onChange,
}: {
  commonClass?: string;
  variant: string;
  selectId: string;
  labelName: string;
  placeholderItem: string;
  items: {id: number; name: string}[];
  value?: number;
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
          return <option key={index} value={item.id}>{item.name}</option>;
        })}
      </select>
    </div>
  );
};

export default VariableSelect;
