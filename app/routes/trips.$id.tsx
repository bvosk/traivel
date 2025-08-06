import type { Route } from "./+types/trips.$id";
import { useParams } from "react-router";
import { generatePlaceholderTrips } from "~/features/trips";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { formatDateRange } from "~/features/trips/utils/formatDate";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trip Details - Traivel" },
    {
      name: "description",
      content: "View detailed information about your trip",
    },
  ];
}

export default function TripsShow() {
  const { id } = useParams();
  const trips = generatePlaceholderTrips();
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Trip not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The trip you're looking for doesn't exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {trip.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {formatDateRange(trip.departureDate, trip.returnDate)}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {trip.destinations.map((destination, index) => (
                <Badge
                  key={destination}
                  variant="secondary"
                  className="text-sm"
                >
                  {trip.flagEmojis[index]} {destination}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Duration:</span>{" "}
                {Math.ceil(
                  (trip.returnDate.getTime() - trip.departureDate.getTime()) /
                    (1000 * 60 * 60 * 24),
                )}{" "}
                days
              </div>
              <div>
                <span className="font-medium">Countries:</span>{" "}
                {trip.flagEmojis.length}
              </div>
              <div>
                <span className="font-medium">Cities:</span>{" "}
                {trip.destinations.length}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
