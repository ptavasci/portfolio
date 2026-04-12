import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

/* ── matchMedia mock (not provided by jsdom) ──────────────────────── */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

/* ── IntersectionObserver mock ────────────────────────────────────── */
class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin = "0px";
  readonly thresholds: ReadonlyArray<number> = [];
  readonly scrollMargin = "";
  private callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe(_target: Element) {}
  unobserve(_target: Element) {}
  disconnect() {}
  takeRecords() {
    return [];
  }

  _trigger(entries: IntersectionObserverEntry[]) {
    this.callback(entries, this as unknown as IntersectionObserver);
  }
}

window.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;
