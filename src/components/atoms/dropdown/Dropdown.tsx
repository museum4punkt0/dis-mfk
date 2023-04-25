import { ChangeEvent } from "react";
import "./style.scss";

type Props = {
  /**
   * Array of objects with option value and label
   */
  data: {
    option: string;
    label: string;
  }[];
  /**
   * Selected value
   */
  value: string;
  /**
   * onChange action
   */
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Dropdown = (props: Props) => {
  const { data, value, handleChange } = props;
  return (
    <div className="mfk-select">
      <select
        name="dropdown"
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}
      >
        {data.map((item, idx) => (
          <option key={`${item.option}_${idx}`} value={item.option}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
