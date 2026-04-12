import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

function renderSeoHook(pathname: string, lang: "es" | "en" = "en") {
  return renderHook(() => useSeo(lang), {
    wrapper: ({ children }) => (
      <MemoryRouter initialEntries={[pathname]}>{children}</MemoryRouter>
    ),
  });
}

describe("useSeo", () => {
  beforeEach(() => {
    document.title = "";
    // Clear existing meta tags
    document
      .querySelectorAll('meta[name="description"], meta[property="og:title"]')
      .forEach((el) => el.remove());
  });

  it("sets default English title and description", () => {
    renderSeoHook("/", "en");

    expect(document.title).toBe("Pablo Tavasci Dozo | Software Engineer");
  });

  it("sets default Spanish title and description", () => {
    renderSeoHook("/", "es");

    expect(document.title).toBe("Pablo Tavasci Dozo | Ingeniero de Software");
  });

  it("sets project-specific title for autodata", () => {
    renderSeoHook("/project/autodata", "en");

    expect(document.title).toContain("Autodata");
  });

  it("sets project-specific title for vineteca", () => {
    renderSeoHook("/project/vineteca", "en");

    expect(document.title).toContain("Vineteca");
  });

  it("sets project-specific title for ajedrez", () => {
    renderSeoHook("/project/ajedrez", "en");

    expect(document.title).toContain("Ajedrez IA");
  });

  it("sets privacy title", () => {
    renderSeoHook("/privacy", "en");

    expect(document.title).toContain("Privacy Policy");
  });

  it("sets terms title", () => {
    renderSeoHook("/terms", "en");

    expect(document.title).toContain("Terms of Service");
  });

  it("updates meta description tag", () => {
    renderSeoHook("/project/autodata", "en");

    const descMeta = document.querySelector('meta[name="description"]');
    expect(descMeta).toHaveAttribute("content");
  });

  it("sets og:title meta tag", () => {
    renderSeoHook("/", "en");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle).toHaveAttribute("content");
  });

  it("sets twitter:card meta tag", () => {
    renderSeoHook("/", "en");

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    expect(twitterCard).toHaveAttribute("content", "summary_large_image");
  });
});
