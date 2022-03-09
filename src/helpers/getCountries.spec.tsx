import { getCountries } from "./getCountries";
type Country = {
  code: string;
  name: string;
};

interface Continent {
  code: string;
  name: string;
  countries: Country[];
}

interface ContinentData {
  continents: Continent[];
}

const dupa = {
  continent: [],
};

describe("getCountries function return", () => {
  it.skip("specyfic countries", () => {});
});
