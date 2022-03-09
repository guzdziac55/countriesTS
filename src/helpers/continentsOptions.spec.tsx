import { continentsOptions } from "./continentsOptions";

interface Country {
  code: string;
  name: string;
}

interface Continent {
  code: string;
  name: string;
  countries: Country[];
}

interface ContinentData {
  continents: Continent[];
}

const mockData: ContinentData = {
  continents: [
    {
      name: "Africa",
      code: "AF",
      countries: [
        {
          name: "Angola",
          code: "AO",
        },
        {
          name: "Burkina Faso",
          code: "BF",
        },
      ],
    },
    {
      name: "Asia",
      code: "AS",
      countries: [
        {
          name: "United Arab Emirates",
          code: "AE",
        },
        {
          name: "Afghanistan",
          code: "AF",
        },
        {
          name: "Armenia",
          code: "AM",
        },
      ],
    },
  ],
};

const mockResult = [
  {
    label: "Africa",
    value: "AF",
  },
  {
    label: "Asia",
    value: "AS",
  },
];

describe("continentsOptions function", () => {
  it("returns two objects ", () => {
    expect(continentsOptions(mockData)?.length).toEqual(2);
  });

  it("return specyfic two objects", () => {
    expect(continentsOptions(mockData)).toEqual(mockResult);
  });
});
