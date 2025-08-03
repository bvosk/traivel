import type { TripData } from "../types";

export function generatePlaceholderTrips(): TripData[] {
  return [
    {
      id: "1",
      title: "European Adventure",
      destinations: ["Paris", "Rome", "Barcelona"],
      departureDate: new Date("2024-06-15"),
      returnDate: new Date("2024-06-30"),
      flagEmojis: ["🇫🇷", "🇮🇹", "🇪🇸"],
    },
    {
      id: "2",
      title: "Asian Discovery",
      destinations: ["Tokyo", "Kyoto", "Osaka"],
      departureDate: new Date("2024-09-10"),
      returnDate: new Date("2024-09-25"),
      flagEmojis: ["🇯🇵", "🇯🇵", "🇯🇵"],
    },
    {
      id: "3",
      title: "Nordic Escape",
      destinations: ["Stockholm", "Oslo", "Copenhagen"],
      departureDate: new Date("2024-07-01"),
      returnDate: new Date("2024-07-14"),
      flagEmojis: ["🇸🇪", "🇳🇴", "🇩🇰"],
    },
    {
      id: "4",
      title: "Australian Road Trip",
      destinations: ["Sydney", "Melbourne", "Brisbane"],
      departureDate: new Date("2024-11-05"),
      returnDate: new Date("2024-11-20"),
      flagEmojis: ["🇦🇺", "🇦🇺", "🇦🇺"],
    },
    {
      id: "5",
      title: "South American Journey",
      destinations: ["Buenos Aires", "Rio de Janeiro", "Lima"],
      departureDate: new Date("2025-02-10"),
      returnDate: new Date("2025-02-28"),
      flagEmojis: ["🇦🇷", "🇧🇷", "🇵🇪"],
    },
    {
      id: "6",
      title: "Weekend in London",
      destinations: ["London"],
      departureDate: new Date("2024-08-15"),
      returnDate: new Date("2024-08-18"),
      flagEmojis: ["🇬🇧"],
    },
  ];
}
