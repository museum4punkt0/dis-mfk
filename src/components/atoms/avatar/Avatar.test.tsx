import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  test("to be rendered with default image", () => {
    render(<Avatar identifier="avatar" />);

    const element = screen.getByTestId("avatar");
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(
      `background: url(empty.jpeg) no-repeat center center/cover`
    );
  });

  test("to be rendered with image", () => {
    render(<Avatar identifier="avatar" url="new.png" />);

    const element = screen.getByTestId("avatar");
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(
      `background: url(new.png) no-repeat center center/cover`
    );
  });
});
