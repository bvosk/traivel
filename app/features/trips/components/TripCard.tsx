import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import type { TripData } from "../types";
import { formatDateRange } from "../utils/formatDate";

interface TripCardProps {
  trip: TripData;
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <CardHeader>
        <CardTitle className="text-lg">{trip.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {trip.destinations.map((destination, index) => (
            <Badge key={destination} variant="outline" className="text-sm">
              {trip.flagEmojis[index]} {destination}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {formatDateRange(trip.departureDate, trip.returnDate)}
        </div>
      </CardContent>
    </Card>
  );
}
