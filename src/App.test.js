import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking heading", () => {
  render(<App />);
  const heading = screen.getByText("Book a Table");
  expect(heading).toBeInTheDocument();
});
