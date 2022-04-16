import { render, screen, cleanup } from "@testing-library/react";
import Button from "../usual/Button";

afterEach(() => {
  cleanup();
});

test("should render button", () => {
  render(<Button text={"Learn more"} />);
  const buttonElement = screen.getByTestId("button-test1");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Learn more");
});
