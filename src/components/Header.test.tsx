import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { TestWrapper } from "../test/test-utils";

function renderHeader() {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    { wrapper: TestWrapper },
  );
}

describe("Header", () => {
  it("renders the logo and name", () => {
    renderHeader();
    expect(screen.getByText("Pablo Tavasci Dozo")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("has a language selector button", () => {
    renderHeader();
    const langBtn = screen.getByRole("button", { name: /select language/i });
    expect(langBtn).toBeInTheDocument();
  });

  it("has a theme selector button", () => {
    renderHeader();
    const themeBtn = screen.getByRole("button", { name: /select theme/i });
    expect(themeBtn).toBeInTheDocument();
  });

  it("opens language dropdown on click", async () => {
    const user = userEvent.setup();
    renderHeader();

    const langBtn = screen.getByRole("button", { name: /select language/i });
    await user.click(langBtn);

    expect(screen.getByText("Español")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("opens theme dropdown on click", async () => {
    const user = userEvent.setup();
    renderHeader();

    const themeBtn = screen.getByRole("button", { name: /select theme/i });
    await user.click(themeBtn);

    // Labels are in English because default lang in tests is "en"
    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
    // "System" appears in both the trigger button and dropdown - check the menu
    const menu = screen.getByRole("menu");
    expect(menu).toHaveTextContent(/Light/);
    expect(menu).toHaveTextContent(/Dark/);
    expect(menu).toHaveTextContent(/System/);
  });

  it("closes language dropdown with Escape key", async () => {
    const user = userEvent.setup();
    renderHeader();

    const langBtn = screen.getByRole("button", { name: /select language/i });
    await user.click(langBtn);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("changes language when selecting an option", async () => {
    const user = userEvent.setup();
    renderHeader();

    const langBtn = screen.getByRole("button", { name: /select language/i });
    await user.click(langBtn);

    const englishBtn = screen.getByText("English");
    await user.click(englishBtn);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("has aria-expanded updated correctly", async () => {
    const user = userEvent.setup();
    renderHeader();

    const langBtn = screen.getByRole("button", { name: /select language/i });
    expect(langBtn).toHaveAttribute("aria-expanded", "false");

    await user.click(langBtn);
    expect(langBtn).toHaveAttribute("aria-expanded", "true");
  });
});
