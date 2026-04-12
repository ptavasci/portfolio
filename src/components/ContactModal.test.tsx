import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactModal from "../components/ContactModal";
import { TestWrapper } from "../test/test-utils";

describe("ContactModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("is not visible by default", () => {
    render(<ContactModal />, { wrapper: TestWrapper });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens when custom event is dispatched", async () => {
    render(<ContactModal />, { wrapper: TestWrapper });

    act(() => {
      window.dispatchEvent(new Event("openContactModal"));
    });

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("displays the obfuscated email", async () => {
    render(<ContactModal />, { wrapper: TestWrapper });
    act(() => {
      window.dispatchEvent(new Event("openContactModal"));
    });

    await waitFor(() => {
      expect(screen.getByText("ptavasci@gmail.com")).toBeInTheDocument();
    });
  });

  it("closes when clicking the backdrop", async () => {
    const user = userEvent.setup();
    render(<ContactModal />, { wrapper: TestWrapper });
    act(() => {
      window.dispatchEvent(new Event("openContactModal"));
    });

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    const backdrop = screen.getByLabelText("Cerrar modal");
    await user.click(backdrop);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes when pressing Escape", async () => {
    const user = userEvent.setup();
    render(<ContactModal />, { wrapper: TestWrapper });
    act(() => {
      window.dispatchEvent(new Event("openContactModal"));
    });

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes when clicking the close button", async () => {
    const user = userEvent.setup();
    render(<ContactModal />, { wrapper: TestWrapper });
    act(() => {
      window.dispatchEvent(new Event("openContactModal"));
    });

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    const closeBtn = screen.getByLabelText("Close modal");
    await user.click(closeBtn);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("has proper ARIA attributes", async () => {
    render(<ContactModal />, { wrapper: TestWrapper });
    act(() => {
      window.dispatchEvent(new Event("openContactModal"));
    });

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby");

    const title = screen.getByRole("heading", { level: 2 });
    expect(dialog.getAttribute("aria-labelledby")).toBe(title.id);
  });
});
