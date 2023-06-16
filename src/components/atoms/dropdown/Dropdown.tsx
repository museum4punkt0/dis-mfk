import { ChangeEvent } from "react";
import { ComponentProps } from "types";

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
} & ComponentProps;

export const Dropdown = (props: Props) => {
  const { data, value, handleChange, identifier } = props;
  return (
    <div className="mfk-select">
      <select
        data-testid={identifier}
        name="dropdown"
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}
      >
        {data.map((item, idx) => (
          <option
            data-testid="dropdown-option"
            key={`${item.option}_${idx}`}
            value={item.option}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
