import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";
import { TextType } from "./type";

describe("Text", () => {
  test("to be rendered with content", () => {
    const contentValue = "Content";
    render(<Text>{contentValue}</Text>);

    const textElement = screen.getByText(contentValue);
    expect(textElement).toBeInTheDocument();
  });

  test("to be rendered with different types", () => {
    const contentValue = "Content";
    const types = ["title", "subtitle1", "subtitle2", "body", "caption"];

    types.forEach((value, idx) => {
      render(<Text type={value as TextType}>{contentValue}</Text>);
      const textElement = screen.getAllByText(contentValue);
      expect(textElement[idx]).toHaveClass(`mfk-text--${value}`);
    });
  });

  test("to be rendered with additional clas", () => {
    const contentValue = "Content";
    const className = "additionalClass";

    render(<Text additionalClass={className}>{contentValue}</Text>);

    const textElement = screen.getByText(contentValue);
    expect(textElement).toHaveClass(className);
  });
});
