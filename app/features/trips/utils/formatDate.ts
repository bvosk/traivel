export function formatDateRange(start: Date, end: Date): string {
  try {
    // Handle invalid dates
    if (!start || !end || isNaN(start.getTime()) || isNaN(end.getTime())) {
      return "Invalid Date";
    }

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const startFormatted = start.toLocaleDateString("en-US", options);
    const endFormatted = end.toLocaleDateString("en-US", options);

    // Handle same day trips
    if (start.toDateString() === end.toDateString()) {
      return startFormatted;
    }

    // Handle same year
    if (start.getFullYear() === end.getFullYear()) {
      const startOptions: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
      };
      return `${start.toLocaleDateString("en-US", startOptions)} - ${endFormatted}`;
    }

    return `${startFormatted} - ${endFormatted}`;
  } catch (error) {
    return "Invalid Date";
  }
}
