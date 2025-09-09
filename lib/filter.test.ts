import { describe, test, expect } from "vitest";
import { applyFilters, type Filters, type Guideline } from "./filter";

const mockData: Guideline[] = [
  {
    id: "1",
    title: "Checkout autofill",
    category: "Checkout",
    severity: "High",
    summary: "Use browser autofill to save time.",
    dos: ["Use autocomplete attributes"],
    donts: ["Clear fields unnecessarily"],
    examples: { good: "Good example", bad: "Bad example" },
  },
  {
    id: "2",
    title: "Helpful empty state",
    category: "Search",
    severity: "Medium",
    summary: "Guide users when no results are found.",
    dos: ["Offer suggestions"],
    donts: ["Dead ends"],
    examples: { good: "Good example", bad: "Bad example" },
  },
];

const baseFilters: Filters = {
  q: "",
  category: "All",
  severity: "All",
  sort: "severity",
  page: 1,
  perPage: 10,
};

describe("applyFilters", () => {
  test("filters by search query", () => {
    const { items } = applyFilters(mockData, { ...baseFilters, q: "checkout" });
    expect(items).toHaveLength(1);
    expect(items[0].id).toBe("1");
  });

  test("filters by category", () => {
    const { items } = applyFilters(mockData, { ...baseFilters, category: "Search" });
    expect(items).toHaveLength(1);
    expect(items[0].id).toBe("2");
  });

  test("sorts by title", () => {
    const { items } = applyFilters(mockData, { ...baseFilters, sort: "title" });
    expect(items[0].title).toBe("Checkout autofill");
  });
});
