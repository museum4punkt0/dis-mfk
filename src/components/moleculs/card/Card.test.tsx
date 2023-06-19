import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

const testData = {
  id: "1",
  date: "1800",
  title: "Title",
  description: "Description",
};

describe("Card", () => {
  test("to be rendered with avatar", () => {
    render(
      <Card
        id={testData.id}
        type={1}
        date={testData.date}
        title={testData.title}
        description={testData.description}
        onClick={jest.fn()}
        identifier="card"
      />
    );

    const element = screen.getByTestId("card");
    expect(element).toBeInTheDocument();

    const dateText = screen.getByRole("caption");
    expect(dateText).toHaveTextContent(testData.date);

    const titleText = screen.getByRole("subtitle1");
    expect(titleText).toHaveTextContent(testData.title);

    const descriptionText = screen.getByRole("body");
    expect(descriptionText).toHaveTextContent(testData.description);

    const avatarElement = screen.getByRole("avatar");
    expect(avatarElement).toBeInTheDocument();
  });
});
