import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Mock next/image for Jest
jest.mock("next/image", () => (props) => <img {...props} />);

describe("Granitura Homepage", () => {

  test("renders company name", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /^Granitura$/i })
    ).toBeInTheDocument();
  });

  test("renders hero section heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /^Global Export Solutions with Granitura$/i })
    ).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /^About$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Services$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Contact$/i })).toBeInTheDocument();
  });

  test("renders all services headings", () => {
    render(<Home />);
    const services = ["Global Logistics", "Quality Assurance", "Market Expansion"];
    services.forEach((service) => {
      expect(
        screen.getByRole("heading", { name: new RegExp(`^${service}$`, "i") })
      ).toBeInTheDocument();
    });
  });

  test("renders contact section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /^Contact Us$/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /^Email Us$/i })
    ).toBeInTheDocument();
  });

});