import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  test("to be rendered with data", () => {
    const dataValue = [
      { option: "1", label: "first" },
      { option: "2", label: "second" },
      { option: "3", label: "third" },
    ];
    render(
      <Dropdown
        data={dataValue}
        value="1"
        identifier="dropdown"
        handleChange={jest.fn()}
      />
    );

    const dropdownElement = screen.getByTestId("dropdown");
    expect(dropdownElement).toBeInTheDocument();

    const options = screen.getAllByTestId(
      "dropdown-option"
    ) as HTMLOptionElement[];
    fireEvent.click(dropdownElement, {
      target: { value: dataValue[1].option },
    });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });
});
