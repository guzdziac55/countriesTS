import { filterCountries } from "./filterCountries";

type Country = {
  code: string;
  name: string;
}[];

describe("FilterCountries function:", () => {
  const countries: Country = [
    { code: "PL", name: "Poland" },
    { code: "FR", name: "Franch" },
    { code: "DE", name: "Germany" },
  ];

  it("return single object", () => {
    expect(filterCountries(countries, "po")).toEqual([countries[0]]);
  });
  it("return three objects", () => {
    expect(filterCountries(countries, "").length).toEqual(3);
  });

  it("return empty array", () => {
    expect(filterCountries(countries, "finlan")).toEqual([]);
  });
});
