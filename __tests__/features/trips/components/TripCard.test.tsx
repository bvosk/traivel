import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { TripCard } from "~/features/trips/components/TripCard";
import type { TripData } from "~/features/trips/types";

const mockTrip: TripData = {
  id: "1",
  title: "European Adventure",
  destinations: ["Paris", "Rome", "Barcelona"],
  departureDate: new Date("2024-06-15"),
  returnDate: new Date("2024-06-30"),
  flagEmojis: ["🇫🇷", "🇮🇹", "🇪🇸"],
};

const mockTripWithInvalidDate: TripData = {
  id: "2",
  title: "Invalid Date Trip",
  destinations: ["London"],
  departureDate: new Date("invalid"),
  returnDate: new Date("invalid"),
  flagEmojis: ["🇬🇧"],
};

const mockTripNoDestinations: TripData = {
  id: "3",
  title: "No Destinations Trip",
  destinations: [],
  departureDate: new Date("2024-08-01"),
  returnDate: new Date("2024-08-05"),
  flagEmojis: [],
};

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe("TripCard", () => {
  it("renders trip title correctly", () => {
    renderWithRouter(<TripCard trip={mockTrip} />);
    expect(screen.getByText("European Adventure")).toBeInTheDocument();
  });

  it("renders destinations with flag emojis", () => {
    renderWithRouter(<TripCard trip={mockTrip} />);
    expect(screen.getByText("🇫🇷 Paris")).toBeInTheDocument();
    expect(screen.getByText("🇮🇹 Rome")).toBeInTheDocument();
    expect(screen.getByText("🇪🇸 Barcelona")).toBeInTheDocument();
  });

  it("renders formatted date range", () => {
    renderWithRouter(<TripCard trip={mockTrip} />);
    expect(screen.getByText("Jun 14 - Jun 29, 2024")).toBeInTheDocument();
  });

  it("handles invalid dates gracefully", () => {
    renderWithRouter(<TripCard trip={mockTripWithInvalidDate} />);
    expect(screen.getByText("Invalid Date")).toBeInTheDocument();
  });

  it("handles trips with no destinations", () => {
    renderWithRouter(<TripCard trip={mockTripNoDestinations} />);
    expect(screen.getByText("No Destinations Trip")).toBeInTheDocument();
    // Should not crash and should still render the title and dates
    expect(screen.getByText("Jul 31 - Aug 4, 2024")).toBeInTheDocument();
  });

  it("has hover effect classes", () => {
    const { container } = renderWithRouter(<TripCard trip={mockTrip} />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass(
      "hover:shadow-lg",
      "transition-shadow",
      "cursor-pointer",
    );
  });
});
