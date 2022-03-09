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

export function getCountries(
  { continents }: ContinentData,
  code: string
): Country[] {
  const filteredContinents = code
    ? continents.filter((continent) => continent.code === code)
    : continents;

  // Alternatywnie: filteredContinents.map(continent => continent.countries).flat();
  return filteredContinents.flatMap((continent) => continent.countries);
}

//  może nie być krajów
// export function getCountries(data: ContinentData, code: string): CountryArray {
//   if (data) {
//     //   when app start => lub user clicked X button on select
//     if (code === "") {
//       const countryArrays = data.continents.map((continent) => {
//         return [...continent.countries]; // return arrays of arrays countries
//       });
//       if (countryArrays === undefined) return;
//       const allCountries = ([] as Country[]).concat.apply([], countryArrays);
//       return allCountries;
//     }

//     const good = data.continents.filter((continent) => continent.code === code);
//     const ppp = { ...good };
//     return ppp[0].countries;
//   }
// }
