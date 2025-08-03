import type { TripData } from "../types";
import { TripCard } from "./TripCard";
import { EmptyState } from "./EmptyState";

interface TripListProps {
  trips: TripData[];
}

export function TripList({ trips }: TripListProps) {
  if (trips.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
