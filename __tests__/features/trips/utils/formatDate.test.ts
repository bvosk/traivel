import { describe, it, expect } from "vitest";
import { formatDateRange } from "~/features/trips/utils/formatDate";

describe("formatDateRange", () => {
  it("formats date range with different years correctly", () => {
    const start = new Date("2024-06-15");
    const end = new Date("2025-01-10");
    const result = formatDateRange(start, end);
    expect(result).toBe("Jun 14, 2024 - Jan 9, 2025");
  });

  it("formats date range within same year correctly", () => {
    const start = new Date("2024-06-15");
    const end = new Date("2024-08-30");
    const result = formatDateRange(start, end);
    expect(result).toBe("Jun 14 - Aug 29, 2024");
  });

  it("formats same day trip correctly", () => {
    const date = new Date("2024-06-15");
    const result = formatDateRange(date, date);
    expect(result).toBe("Jun 14, 2024");
  });

  it("handles invalid start date", () => {
    const invalidStart = new Date("invalid");
    const validEnd = new Date("2024-06-30");
    const result = formatDateRange(invalidStart, validEnd);
    expect(result).toBe("Invalid Date");
  });

  it("handles invalid end date", () => {
    const validStart = new Date("2024-06-15");
    const invalidEnd = new Date("invalid");
    const result = formatDateRange(validStart, invalidEnd);
    expect(result).toBe("Invalid Date");
  });

  it("handles both dates invalid", () => {
    const invalidStart = new Date("invalid");
    const invalidEnd = new Date("also invalid");
    const result = formatDateRange(invalidStart, invalidEnd);
    expect(result).toBe("Invalid Date");
  });

  it("handles null/undefined dates", () => {
    const result1 = formatDateRange(null as any, new Date("2024-06-30"));
    const result2 = formatDateRange(new Date("2024-06-15"), undefined as any);
    const result3 = formatDateRange(null as any, undefined as any);

    expect(result1).toBe("Invalid Date");
    expect(result2).toBe("Invalid Date");
    expect(result3).toBe("Invalid Date");
  });

  it("formats past dates correctly", () => {
    const start = new Date("2020-01-01");
    const end = new Date("2020-01-15");
    const result = formatDateRange(start, end);
    expect(result).toBe("Dec 31, 2019 - Jan 14, 2020");
  });

  it("formats dates with single digit days", () => {
    const start = new Date("2024-03-01");
    const end = new Date("2024-03-05");
    const result = formatDateRange(start, end);
    expect(result).toBe("Feb 29 - Mar 4, 2024");
  });

  it("handles edge case of consecutive months same year", () => {
    const start = new Date("2024-03-30");
    const end = new Date("2024-04-02");
    const result = formatDateRange(start, end);
    expect(result).toBe("Mar 29 - Apr 1, 2024");
  });
});
