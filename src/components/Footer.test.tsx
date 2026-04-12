import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import { TestWrapper } from "../test/test-utils";

function renderFooter(
  props = { activeLink: null as "privacy" | "terms" | null, displayText: "" },
) {
  return render(
    <BrowserRouter>
      <Footer {...props} />
    </BrowserRouter>,
    { wrapper: TestWrapper },
  );
}

describe("Footer", () => {
  it("renders brand name", () => {
    renderFooter();
    expect(screen.getByText("Pablo Tavasci Dozo")).toBeInTheDocument();
  });

  it("renders all project links", () => {
    renderFooter();
    expect(screen.getByText("Autodata")).toBeInTheDocument();
    expect(screen.getByText("Vineteca")).toBeInTheDocument();
    expect(screen.getByText("Ajedrez IA")).toBeInTheDocument();
  });

  it("renders social links", () => {
    renderFooter();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("X")).toBeInTheDocument();
  });

  it("renders contact button", () => {
    renderFooter();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders legal section headings", () => {
    renderFooter();
    expect(screen.getByText("Legal")).toBeInTheDocument();
  });

  it("shows privacy title when no animation is active", () => {
    renderFooter({ activeLink: null, displayText: "" });
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  it("shows terms title when no animation is active", () => {
    renderFooter({ activeLink: null, displayText: "" });
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    renderFooter();
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Pablo Tavasci Dozo`),
    ).toBeInTheDocument();
  });

  it("has footer joke text", () => {
    renderFooter();
    const joke = screen.getByText(/coffee maker|cafetera/i);
    expect(joke).toBeInTheDocument();
  });
});
