import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import { Navigation } from "~/components/Navigation";

describe("Navigation", () => {
  it("renders navigation bar with logo", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("🌍")).toBeInTheDocument(); // Logo emoji
  });

  it("renders home link with correct href", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole("link");
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("logo is clickable and links to home", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    const logoLink = screen.getByRole("link");
    expect(logoLink).toContainElement(screen.getByText("🌍"));
  });
});
