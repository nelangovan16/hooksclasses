import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React is Fun!! title", () => {
  render(<App />);
  const heading = screen.getByText(/React is Fun!!/i);
  expect(heading).toBeInTheDocument();
});

test("renders subtitle", () => {
  render(<App />);
  const subtitle = screen.getByText(/I am writing JSX/i);
  expect(subtitle).toBeInTheDocument();
});
