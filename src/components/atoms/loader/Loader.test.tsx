import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Loader } from "./Loader";

describe("Loader", () => {
  test("to be rendered with content", () => {
    render(<Loader identifier="loader" />);

    const element = screen.getByTestId("loader");
    expect(element).toBeInTheDocument();
  });
});
