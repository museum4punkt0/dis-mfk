import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

test("render Main component", async () => {
  render(<Main />);

  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();

  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();

  const loaderElement = screen.getByTestId("loader");
  expect(loaderElement).toBeInTheDocument();

  //FIXME: Need to set condition for showing content
  // const contentElement = screen.getByTestId("content");
  // expect(contentElement).toBeInTheDocument();
});
