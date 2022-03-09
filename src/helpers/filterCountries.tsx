type Country = {
  code: string;
  name: string;
};

export function filterCountries(countries: Country[], input: string) {
  if (input === "") return countries;
  const filtered = countries.filter((country) =>
    country.name.toLowerCase().includes(input.toLowerCase())
  );

  return filtered;
}
