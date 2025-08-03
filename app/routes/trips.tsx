import type { Route } from "./+types/trips";
import { TripList, generatePlaceholderTrips } from "~/features/trips";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Trips - Traivel" },
    { name: "description", content: "View and manage your travel itineraries" },
  ];
}

export default function Trips() {
  const trips = generatePlaceholderTrips();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          My Trips
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore your travel adventures and plan new ones
        </p>
      </div>
      <TripList trips={trips} />
    </main>
  );
}
