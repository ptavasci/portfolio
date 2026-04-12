import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TiltCard from "../components/TiltCard";

describe("TiltCard", () => {
  it("renders children", () => {
    render(
      <TiltCard>
        <span>Card content</span>
      </TiltCard>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <TiltCard className="my-card">
        <span>Card content</span>
      </TiltCard>,
    );
    expect(screen.getByText("Card content").parentElement).toHaveClass(
      "my-card",
    );
  });

  it("has perspective and default transform", () => {
    render(
      <TiltCard>
        <span>Card content</span>
      </TiltCard>,
    );
    const container = screen.getByText("Card content").parentElement!;
    expect(container).toHaveStyle({ transformStyle: "preserve-3d" });
  });

  it("applies tilt effect on mouse move", async () => {
    const user = userEvent.setup();
    render(
      <TiltCard maxTilt={10} scale={1.05}>
        <span>Card content</span>
      </TiltCard>,
    );
    const container = screen.getByText("Card content").parentElement!;

    await user.hover(container);

    // After hover, transform should contain perspective and rotation
    expect(container).toHaveStyle({ transformStyle: "preserve-3d" });
  });

  it("resets tilt on mouse leave", async () => {
    const user = userEvent.setup();
    render(
      <TiltCard>
        <span>Card content</span>
      </TiltCard>,
    );
    const container = screen.getByText("Card content").parentElement!;

    await user.hover(container);
    await user.unhover(container);

    // After unhover, transform should reset to identity
    expect(container.style.transform).toContain("rotateX(0deg)");
    expect(container.style.transform).toContain("rotateY(0deg)");
  });
});
