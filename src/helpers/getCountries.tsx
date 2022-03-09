type Country = {
    code: string
    name: string
}

interface Continent {
    code: string
    name: string
    countries: Country[]
}

interface ContinentData {
    continents: Continent[]
}

export function getCountries(
    { continents }: ContinentData,
    code: string
): Country[] {
    const filteredContinents = code
        ? continents.filter((continent) => continent.code === code)
        : continents

    // Alternatywnie: filteredContinents.map(continent => continent.countries).flat();
    return filteredContinents.flatMap((continent) => continent.countries)
}
