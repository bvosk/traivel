import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TripList } from "~/features/trips/components/TripList";
import type { TripData } from "~/features/trips/types";

const mockTrips: TripData[] = [
  {
    id: "1",
    title: "European Adventure",
    destinations: ["Paris", "Rome"],
    departureDate: new Date("2024-06-15"),
    returnDate: new Date("2024-06-30"),
    flagEmojis: ["🇫🇷", "🇮🇹"],
  },
  {
    id: "2",
    title: "Asian Discovery",
    destinations: ["Tokyo", "Kyoto"],
    departureDate: new Date("2024-09-10"),
    returnDate: new Date("2024-09-25"),
    flagEmojis: ["🇯🇵", "🇯🇵"],
  },
];

describe("TripList", () => {
  it("renders EmptyState when trips array is empty", () => {
    render(<TripList trips={[]} />);
    expect(screen.getByText("No trips found")).toBeInTheDocument();
    expect(
      screen.getByText(
        "You haven't planned any trips yet. Start planning your next adventure!",
      ),
    ).toBeInTheDocument();
  });

  it("renders TripCard components when trips are provided", () => {
    render(<TripList trips={mockTrips} />);
    expect(screen.getByText("European Adventure")).toBeInTheDocument();
    expect(screen.getByText("Asian Discovery")).toBeInTheDocument();
    expect(screen.getByText("🇫🇷 Paris")).toBeInTheDocument();
    expect(screen.getByText("🇯🇵 Tokyo")).toBeInTheDocument();
  });

  it("renders correct number of trip cards", () => {
    const { container } = render(<TripList trips={mockTrips} />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards).toHaveLength(2);
  });

  it("has responsive grid layout classes", () => {
    const { container } = render(<TripList trips={mockTrips} />);
    const gridContainer = container.querySelector("div");
    expect(gridContainer).toHaveClass(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-3",
      "gap-6",
    );
  });

  it("renders single trip correctly", () => {
    const singleTrip = [mockTrips[0]];
    render(<TripList trips={singleTrip} />);
    expect(screen.getByText("European Adventure")).toBeInTheDocument();
    expect(screen.queryByText("No trips found")).not.toBeInTheDocument();
  });
});
