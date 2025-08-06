import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TripsShow from "~/routes/trips.$id";
import type { TripData } from "~/features/trips/types";

// Mock the placeholder data module
const mockTrip: TripData = {
  id: "1",
  title: "European Adventure",
  destinations: ["Paris", "Rome", "Barcelona"],
  departureDate: new Date("2024-06-15"),
  returnDate: new Date("2024-06-30"),
  flagEmojis: ["🇫🇷", "🇮🇹", "🇪🇸"],
};

// Mock the generatePlaceholderTrips function
vi.mock("~/features/trips", () => ({
  generatePlaceholderTrips: vi.fn(() => [mockTrip]),
}));

// Mock useParams
vi.mock("react-router", () => ({
  useParams: vi.fn(() => ({ id: "1" })),
}));

describe("TripsShow", () => {
  it("renders trip title", () => {
    render(<TripsShow />);
    expect(screen.getByText("European Adventure")).toBeInTheDocument();
  });

  it("renders trip destinations", () => {
    render(<TripsShow />);
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
    expect(screen.getByText(/Rome/)).toBeInTheDocument();
    expect(screen.getByText(/Barcelona/)).toBeInTheDocument();
  });

  it("renders trip dates", () => {
    render(<TripsShow />);
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it("renders flag emojis", () => {
    render(<TripsShow />);
    expect(screen.getByText(/🇫🇷/)).toBeInTheDocument();
    expect(screen.getByText(/🇮🇹/)).toBeInTheDocument();
    expect(screen.getByText(/🇪🇸/)).toBeInTheDocument();
  });
});
