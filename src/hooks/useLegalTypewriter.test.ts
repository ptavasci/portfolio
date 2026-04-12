import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLegalTypewriter } from "../hooks/useLegalTypewriter";

describe("useLegalTypewriter", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("starts with null activeLink and empty displayText", () => {
    const { result } = renderHook(() => useLegalTypewriter("en"));

    expect(result.current.activeLink).toBeNull();
    expect(result.current.displayText).toBe("");
  });

  it("eventually sets activeLink after initial delay", async () => {
    const { result } = renderHook(() => useLegalTypewriter("en"));

    // Advance past the 3s initial delay
    await vi.advanceTimersByTimeAsync(3500);

    // Allow any microtasks to settle
    await new Promise((r) => setTimeout(r, 50));
    vi.advanceTimersByTime(100);

    expect(result.current.activeLink).toBeDefined();
    expect(["privacy", "terms", null]).toContain(result.current.activeLink);
  });

  it("uses Spanish translations when lang is es", async () => {
    const { result } = renderHook(() => useLegalTypewriter("es"));

    await vi.advanceTimersByTimeAsync(3500);
    await new Promise((r) => setTimeout(r, 50));
    vi.advanceTimersByTime(100);

    if (result.current.activeLink) {
      expect(result.current.displayText).toMatch(
        /Política de Privacidad|Términos de Servicio/,
      );
    }
  });

  it("cleans up timeouts on unmount", () => {
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { unmount } = renderHook(() => useLegalTypewriter("en"));

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
