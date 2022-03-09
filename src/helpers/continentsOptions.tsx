interface Country {
  code: string;
  name: string;
  // later emoji and languages
}

interface Continent {
  code: string;
  name: string;
  countries: Country[];
}

interface ContinentData {
  continents: Continent[];
}

type SelectOption = {
  label: string;
  value: string;
}[];

export const continentsOptions = (
  data: ContinentData | undefined
): SelectOption | undefined => {
  if (data) {
    let result: SelectOption = [];
    data.continents.forEach((continent) => {
      result.push({ label: continent.name, value: continent.code });
    });
    return result;
  }
};
