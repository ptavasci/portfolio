import { describe, it, expect, vi, beforeEach } from "vitest";
import { openContact } from "./contact";

describe("contact utility", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("dispatches openContactModal custom event", () => {
    const listener = vi.fn();
    window.addEventListener("openContactModal", listener);

    openContact();

    expect(listener).toHaveBeenCalledTimes(1);

    window.removeEventListener("openContactModal", listener);
  });
});
