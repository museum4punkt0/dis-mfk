import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Content } from "./Content";

const data = [
  {
    id: "1",
    type: 1,
    startDate: "1800",
    title: {
      en: "Voltaic Pile",
      de: "Voltasche Säule",
      ge: "Voltasche Säule",
    },
    description: {
      en: `Alessandro Volta develops the prototype of today’s batteries – the voltaic pile.`,
      de: `Alessandro Volta entwickelt den Prototyp unserer heutigen Batterien – die voltasche Säule.`,
      ge: `Alessandro Volta entwickelt den Prototyp unserer heutigen Batterien – die voltasche Säule.`,
    },
  },
  {
    id: "2",
    type: 2,
    startDate: "1808",
    title: {
      en: "Sotzmann Globe",
      de: "Sotzmann-Globus",
      ge: "Sotzmann-Globus",
    },
    description: {
      en: `Sotzmann Globe shows the voyages of discovery complementing the European view of the
        world.`,
      de: `Sotzmann-Globus und die Vervollständigung des europäischen Weltbilds durch Schifffahrten`,
      ge: `Sotzmann-Globus und die Vervollständigung des europäischen Weltbilds durch Schifffahrten`,
    },
  },
];

test("render Main component", async () => {
  render(
    <Content
      data={data}
      currentLang={"en"}
      onClickAction={() => {}}
      identifier="content"
    />
  );

  const contentElement = screen.getByTestId("content");
  expect(contentElement).toBeInTheDocument();
});
