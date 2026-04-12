import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTilt } from "../hooks/useTilt";

describe("useTilt", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("returns ref, style, onMouseMove, onMouseLeave", () => {
    const { result } = renderHook(() => useTilt());

    expect(result.current.ref).toBeDefined();
    expect(result.current.style).toEqual({});
    expect(typeof result.current.onMouseMove).toBe("function");
    expect(typeof result.current.onMouseLeave).toBe("function");
  });

  it("calculates rotation on mouse move", () => {
    const { result } = renderHook(() => useTilt(10, 1.05));

    // Create a mock element with dimensions
    const mockElement = {
      getBoundingClientRect: () =>
        ({
          width: 200,
          height: 100,
          left: 100,
          top: 50,
        }) as DOMRect,
    } as HTMLDivElement;

    (result.current.ref as React.RefObject<HTMLDivElement>).current =
      mockElement;

    const mockEvent = {
      clientX: 150,
      clientY: 50,
    } as React.MouseEvent<HTMLDivElement>;

    act(() => {
      result.current.onMouseMove(mockEvent);
    });

    expect(result.current.style.transform).toContain("perspective");
    expect(result.current.style.transform).toContain("rotateX");
    expect(result.current.style.transform).toContain("rotateY");
    expect(result.current.style.transform).toContain("scale3d");
  });

  it("resets transform on mouse leave", () => {
    const { result } = renderHook(() => useTilt());

    act(() => {
      result.current.onMouseLeave();
    });

    expect(result.current.style.transform).toBe(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
    expect(result.current.style.transition).toBe("transform 0.5s ease-out");
  });

  it("uses default values for maxTilt and scale", () => {
    const { result } = renderHook(() => useTilt());

    const mockElement = {
      getBoundingClientRect: () =>
        ({
          width: 200,
          height: 100,
          left: 100,
          top: 50,
        }) as DOMRect,
    } as HTMLDivElement;

    (result.current.ref as React.RefObject<HTMLDivElement>).current =
      mockElement;

    const mockEvent = {
      clientX: 150,
      clientY: 50,
    } as React.MouseEvent<HTMLDivElement>;

    act(() => {
      result.current.onMouseMove(mockEvent);
    });

    expect(result.current.style.transition).toBe("transform 0.1s ease-out");
  });
});
