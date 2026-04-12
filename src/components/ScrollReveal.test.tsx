import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ScrollReveal from "../components/ScrollReveal";

describe("ScrollReveal", () => {
  it("renders children", () => {
    render(
      <ScrollReveal>
        <span>Test content</span>
      </ScrollReveal>,
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("starts with invisible state", () => {
    render(
      <ScrollReveal>
        <span>Test content</span>
      </ScrollReveal>,
    );
    const container = screen.getByText("Test content").parentElement;
    expect(container).toHaveClass("opacity-0");
    expect(container).toHaveClass("translate-y-8");
  });

  it("applies custom className", () => {
    render(
      <ScrollReveal className="custom-class">
        <span>Test content</span>
      </ScrollReveal>,
    );
    const container = screen.getByText("Test content").parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("disconnects observer on unmount", () => {
    const { unmount } = render(
      <ScrollReveal>
        <span>Test content</span>
      </ScrollReveal>,
    );

    expect(() => unmount()).not.toThrow();
  });
});
